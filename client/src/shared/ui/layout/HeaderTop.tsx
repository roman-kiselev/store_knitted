import { useAppDispatch, useAppSelector } from "../../hooks";
import { setLanguage } from "../../models";
import topStyles from "./style/top.module.css";

const HeaderTop = () => {
    const dispatch = useAppDispatch();

    const { defaultLanguage } = useAppSelector((store) => store.language);
    const { defaultCurrency } = useAppSelector((store) => store.currency);

    const handleChangeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setLanguage(e.target.value));
    };

    const handleChangeCurrency = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setLanguage(e.target.value));
    };

    return (
        <div className={topStyles.containerImage}>
            <div className={topStyles.containerTools}>
                <div className={topStyles.language}>
                    <select
                        className={topStyles.select}
                        name="language"
                        defaultValue={defaultLanguage}
                        onChange={handleChangeLanguage}
                    >
                        <option value="en">English</option>
                        <option value="ru">Русский</option>
                    </select>
                </div>
                <div className={topStyles.currency}>
                    <select
                        className={topStyles.select}
                        name="currency"
                        defaultValue={defaultCurrency}
                        onChange={handleChangeCurrency}
                    >
                        <option value="rub">Руб</option>
                        <option value="usd">USD</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;
