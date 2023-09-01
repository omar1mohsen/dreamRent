import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useDispatch } from "react-redux";
import { showCreateModal } from "@/app/store/showmodel/ShowSlice";
import ModalCloseBtn from "../../components/ModalCloseBtn";
import { Slide } from "@mui/material";
import { UserAuth } from "../../context/AuthContext";
import styles from "../Modal.module.css";
import LoadingSpinner from "../../components/LoadingSpinner";
import { toast } from "react-toastify";
import storeImage from "../../utilits/helpers/storeImage";
import { addDoc, collection, serverTimestamp } from "@firebase/firestore";
import { db } from "@/firebase";
import { useRouter } from "next/navigation";

interface ModalFormData {
  type: string;
  title: string;
  description: string;
  bedrooms: number;
  pathrooms: number;
  parking: boolean;
  furnished: boolean;
  address: string;
  offer: boolean;
  regularPrice: number;
  discountedPrice?: number;
  images: any;
  userRef?: string;
}

function CreateModal({ showState }: { showState: boolean }) {
  const dispatch = useDispatch();
  const { user } = UserAuth();
  const [loading, setLoading] = React.useState<boolean>(false);
  const isMounted = React.useRef(true);
  const navigate = useRouter();

  // formdata inputs
  const [formData, setFormData] = React.useState<ModalFormData>({
    type: "rent",
    title: "",
    description: "",
    bedrooms: 1,
    pathrooms: 1,
    parking: false,
    furnished: false,
    address: "",
    offer: false,
    regularPrice: 0,
    discountedPrice: 0,
    images: {},
  });
  const {
    type,
    title,
    description,
    bedrooms,
    pathrooms,
    parking,
    furnished,
    address,
    offer,
    regularPrice,
    discountedPrice,
    images,
  } = formData;

  const handleClose = () => {
    dispatch(showCreateModal());
  };

  // check if there is user so we can connect it with data
  React.useEffect(() => {
    if (isMounted) {
      setFormData({ ...formData, userRef: user?.uid });
    }
    return () => {
      isMounted.current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMounted]);

  // Handle on submit
  const creatListing = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (discountedPrice && +discountedPrice >= +regularPrice) {
      setLoading(false);
      toast.error("Discounted price needs to be less than regular price");
      return;
    }

    if (images.length > 6) {
      setLoading(false);
      toast.error(`Maximum of six images allowed`);
    }

    const imgUrls = await Promise.all(
      [...images].map((image) => storeImage(image))
    ).catch((error) => {
      setLoading(false);
      toast.error("Images not uploaded");
      return;
    });

    const formDataCopy = {
      ...formData,
      imgUrls: imgUrls,
      timestamp: serverTimestamp(),
    };
    delete formDataCopy.images;
    formDataCopy.discountedPrice = Number(formDataCopy.discountedPrice)
    !formDataCopy.offer && delete formDataCopy.discountedPrice;
    formDataCopy.regularPrice = Number(formDataCopy.regularPrice)

    await addDoc(collection(db, "listings"), formDataCopy).then((docRef) => {
      toast.success("Listing saved");
      handleClose()
      navigate.push(`/category/${formDataCopy.type}/listing/${docRef?.id}`);
    });

    setLoading(false);
  };

  let selectedFiles: any = [];

  // handle onchnage
  const onMutate = (e: any) => {
    let boolean: boolean | null = null;
    if (e.target.value === "true") {
      boolean = true;
    }
    if (e.target.value === "false") {
      boolean = false;
    }
    //files
    if (e.target.files) {
      let files = e.target.files;

      // Clear the previously selected files
      selectedFiles = [];

      // Iterate through the files and store them in the selectedFiles array
      for (let i = 0; i < files.length; i++) {
        selectedFiles.unshift(files[i]);
      }

      // You now have the selected files in the desired order in the selectedFiles array
      setFormData((prevState) => {
        return { ...prevState, images: selectedFiles };
      });
    }

    // other inputs
    if (!e.target.files) {
      setFormData((prevState) => {
        return { ...prevState, [e.target.id]: boolean ?? e.target.value };
      });
    }
  };

  return (
    <Modal
      open={showState}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
      className="bg-black/60  flex justify-center items-center"
    >
      <Slide direction="right" in={showState} mountOnEnter unmountOnExit>
        <Box className={styles.modalBox}>
          <ModalCloseBtn handleClose={handleClose} />
          <header>
            <h3 className={styles.modalHeader}>Create a Listing</h3>
          </header>
          <main>
            {loading ? (
              <div className="">
                <LoadingSpinner />
              </div>
            ) : (
              <form className={styles.modalForm} onSubmit={creatListing}>
                {/*type*/}
                <div className={styles.formInput}>
                  <label htmlFor="type" className={styles.inputLabel}>
                    Sell / Rent
                  </label>
                  <div className={styles.inputBtns}>
                    <button
                      type="button"
                      id="type"
                      value={"rent"}
                      onClick={onMutate}
                      className={`${styles.inputBtn} ${
                        type === "rent" ? styles.activeBtn : ""
                      }`}
                    >
                      Rent
                    </button>
                    <button
                      type="button"
                      id="type"
                      value={"sell"}
                      onClick={onMutate}
                      className={`${styles.inputBtn} ${
                        type === "sell" ? styles.activeBtn : ""
                      }`}
                    >
                      sell
                    </button>
                  </div>
                </div>
                {/*title*/}
                <div className={styles.formInput}>
                  <label htmlFor="title" className={styles.inputLabel}>
                    Title
                  </label>
                  <input
                    id="title"
                    type="text"
                    onChange={onMutate}
                    className={styles.formTextInput}
                    required
                    minLength={10}
                    maxLength={50}
                    value={title}
                  />
                </div>
                {/*room deatils*/}
                <div className={styles.formInput}>
                  <div className={`${styles.inputBtns} !space-x-6`}>
                    <div className="">
                      <label htmlFor="bedrooms" className={styles.inputLabel}>
                        Bedrooms
                      </label>
                      <input
                        id="bedrooms"
                        type="number"
                        onChange={onMutate}
                        className={styles.formNumberInput}
                        required
                        min={0}
                        value={bedrooms}
                      />
                    </div>
                    <div className="">
                      <label htmlFor="pathrooms" className={styles.inputLabel}>
                        Pathrooms
                      </label>
                      <input
                        id="pathrooms"
                        type="number"
                        onChange={onMutate}
                        className={styles.formNumberInput}
                        required
                        min={0}
                        value={pathrooms}
                      />
                    </div>
                  </div>
                </div>
                {/*parking*/}
                <div className={styles.formInput}>
                  <label htmlFor="parking" className={styles.inputLabel}>
                    Parking Spot
                  </label>
                  <div className={styles.inputBtns}>
                    <button
                      type="button"
                      id="parking"
                      value={'true'}
                      onClick={onMutate}
                      className={`${styles.inputBtn} ${
                        parking === true ? styles.activeBtn : ""
                      }`}
                    >
                      Yes
                    </button>
                    <button
                      type="button"
                      id="parking"
                      value={'false'}
                      onClick={onMutate}
                      className={`${styles.inputBtn} ${
                        parking === false ? styles.activeBtn : ""
                      }`}
                    >
                      No
                    </button>
                  </div>
                </div>
                {/*furnished*/}
                <div className={styles.formInput}>
                  <label htmlFor="furnished" className={styles.inputLabel}>
                    Furnished
                  </label>
                  <div className={styles.inputBtns}>
                    <button
                      type="button"
                      id="furnished"
                      value={'true'}
                      onClick={onMutate}
                      className={`${styles.inputBtn} ${
                        furnished === true ? styles.activeBtn : ""
                      }`}
                    >
                      Yes
                    </button>
                    <button
                      type="button"
                      id="furnished"
                      value={'false'}
                      onClick={onMutate}
                      className={`${styles.inputBtn} ${
                        furnished === false ? styles.activeBtn : ""
                      }`}
                    >
                      No
                    </button>
                  </div>
                </div>
                {/*offer*/}
                <div className={styles.formInput}>
                  <label htmlFor="offer" className={styles.inputLabel}>
                    Offer
                  </label>
                  <div className={styles.inputBtns}>
                    <button
                      type="button"
                      id="offer"
                      value={'true'}
                      onClick={onMutate}
                      className={`${styles.inputBtn} ${
                        offer === true ? styles.activeBtn : ""
                      }`}
                    >
                      Yes
                    </button>
                    <button
                      type="button"
                      id="offer"
                      value={'false'}
                      onClick={onMutate}
                      className={`${styles.inputBtn} ${
                        offer === false ? styles.activeBtn : ""
                      }`}
                    >
                      No
                    </button>
                  </div>
                </div>
                {/*price sec*/}
                <div className={styles.formInput}>
                  <div className="inputComponent">
                    <label htmlFor="regularPrice" className={styles.inputLabel}>
                      RegularPrice
                    </label>
                    <div className=" flex space-x-0 items-center">
                      <input
                        id="regularPrice"
                        type="number"
                        className={`${styles.formNumberInput} !w-48 !me-2`}
                        required
                        min={50}
                        max={1000000000}
                        value={regularPrice}
                        onChange={onMutate}
                      />
                      <p className="text-lg max-sm:text-sm font-semibold text-[--sec-text-color]">
                        {type === "rent" ? "$ /Month" : "$"}
                      </p>
                    </div>
                  </div>
                </div>

                {offer === true ? (
                  <div className={styles.formInput}>
                    <div className="inputComponent">
                      <label
                        htmlFor="discountedPrice"
                        className={styles.inputLabel}
                      >
                        DiscountedPrice
                      </label>
                      <div className=" flex space-x-0 items-center">
                        <input
                          id="discountedPrice"
                          type="number"
                          className={`${styles.formNumberInput} !w-48 !me-2`}
                          required={offer}
                          min={50}
                          max={100000000}
                          value={discountedPrice}
                          onChange={onMutate}
                        />
                        <p className="text-lg font-semibold text-[--sec-text-color]">
                          $
                        </p>
                      </div>
                    </div>
                  </div>
                ) : null}
                {/*address*/}
                <div className={styles.formInput}>
                  <label htmlFor="address" className={styles.inputLabel}>
                    Address
                  </label>
                  <textarea
                    id="address"
                    rows={1}
                    className={styles.formTextInput}
                    required
                    minLength={10}
                    value={address}
                    onChange={onMutate}
                  />
                </div>
                {/*description*/}
                <div className={styles.formInput}>
                  <label htmlFor="description" className={styles.inputLabel}>
                    Description
                  </label>
                  <textarea
                    id="description"
                    rows={3}
                    className={styles.formTextInput}
                    required
                    minLength={10}
                    value={description}
                    onChange={onMutate}
                  />
                </div>
                {/*images*/}
                <div className={styles.formInput}>
                  <label htmlFor="images" className={`${styles.inputLabel}`}>
                    The first image will be the cover (max 6 )
                  </label>
                  <input
                    id="images"
                    type="file"
                    className={styles.formImagesInput}
                    multiple
                    required
                    onChange={onMutate}
                    max={6}
                    min={1}
                    accept=".jpg,.png,.jpeg "
                  />
                </div>
                <button type="submit" className={styles.formSubmitBtn}>
                  Creat Listing
                </button>
              </form>
            )}
          </main>
        </Box>
      </Slide>
    </Modal>
  );
}

export default CreateModal;
