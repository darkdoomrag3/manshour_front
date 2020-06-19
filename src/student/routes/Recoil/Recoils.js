import { atom, useRecoilState, selector } from "recoil";


const handelFormState = atom({
    key: 'formState',
    default: [],
});

const getFormState = selector({
    key: 'getForm',
    get: ({ get }) => {
        handleSubmitRegister = (e) => {
            e.preventDefault();

            console.log(process.env);

            const submitBtn = document.getElementById("register_submit");
            submitBtn.disabled = true;

            const phoneNumber = document.getElementById("phone_number").value;
            const referencePhoneNumber = document.getElementById(
                "reference_phone_number"
            ).value;
            setLoading(true);

            axios({
                url: "https://manshour.herokuapp.com/" + "api/auth/register-start",
                method: "POST",

                data: {
                    phone_number: phoneNumber,
                    reference_phone_number: referencePhoneNumber
                        ? referencePhoneNumber
                        : null,
                },
            })
                .then((data) => {
                    console.log(data);
                    submitBtn.disabled = false;
                    setLoading(false);
                    setIsSMSSent(true);
                })
                .catch((e) => {
                    console.log(e.response);
                    submitBtn.disabled = false;
                    setLoading(false);
                })

        }
    },
});

const [phoneNumber, setPhoneNumber] = useRecoilState(getFormState);
const [referencePhoneNumber, setReferencePhoneNumber] = useRecoilState(getFormState);



const HandelREjisterWithRecoil = useRecoilState(getFormState);

export default HandelREjisterWithRecoil;
