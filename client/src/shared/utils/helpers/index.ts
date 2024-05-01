import { IMasterClass } from "../../interface";

// Возвращает сумму по мастер классам
export const getSumTotal = (masterClass: IMasterClass[]) => {
    const sumRu = masterClass.reduce(
        (sum: number, item: IMasterClass) => sum + item.priceRu,
        0
    );
    const sumEng = masterClass.reduce(
        (sum: number, item: IMasterClass) => sum + item.priceEng,
        0
    );

    return { sumRu, sumEng };
};
