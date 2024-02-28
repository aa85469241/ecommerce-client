'use client';

import qs from "query-string"
import { Category, Color, Size } from "@/types"
import { useRouter, useSearchParams } from 'next/navigation'

interface FilterProps {
    type: "size" | "color" | "category";
    data?: Size[] | Color[];
    category?: Category[];
    filterName: string;
    searchKey: string;
}

export const Filter: React.FC<FilterProps> = ({
    type,
    data,
    category,
    filterName,
    searchKey
}) => {
    const searchParams = useSearchParams()
    const router = useRouter();

    const selectedValue = searchParams.get(searchKey);

    const onFiltering = (value: string) => {
        const current = qs.parse(searchParams.toString());

        const query = {
            ...current,
            [searchKey]: value
        }

        if (current[searchKey] === value) {
            query[searchKey] = null;
        }

        const url = qs.stringifyUrl({
            url: window.location.href,
            query
        }, { skipNull: true })

        router.push(url);
    }

    const removeQuery = () => {
        const url = window.location.href;
        const newUrl = qs.exclude(url, [searchKey]);

        router.push(newUrl);
    }

    return (
        <div className="p-4">
            <div>
                <h2 className="text-start text-md font-semibold font-kanit uppercase md:text-xl">
                    {filterName}
                </h2>
                <div className="divider divider-neutral mt-0 mb-2"></div>
                <div className="flex flex-col gap-3 p-1">
                    <div
                        className="flex items-center gap-2 cursor-pointer"
                        onClick={() => removeQuery()}
                    >
                        <input
                            type="checkbox"
                            checked={selectedValue ? false : true}
                            readOnly
                            className="checkbox checkbox-xs"
                        />
                        <span className="text-sm font-light font-kanit hover:font-bold">
                            All
                        </span>
                    </div>
                    {type === "category"
                        ?
                        <>
                            {category?.map((_data) => (
                                <div
                                    key={_data.id}
                                    className="flex items-center gap-2 cursor-pointer"
                                    onClick={() => onFiltering(_data.id)}
                                >
                                    <input
                                        type="checkbox"
                                        checked={selectedValue === _data.id ? true : false}
                                        readOnly
                                        className="checkbox checkbox-xs"
                                    />
                                    <span className="text-sm font-light font-kanit hover:font-bold">
                                        {_data.name}
                                    </span>
                                </div>
                            ))}
                        </>
                        :
                        <>
                            {data?.map((_data) => (
                                <div
                                    key={_data.id}
                                    className="flex items-center gap-2 cursor-pointer"
                                    onClick={() => onFiltering(_data.value)}
                                >
                                    <input
                                        type="checkbox"
                                        checked={selectedValue === _data.value ? true : false}
                                        readOnly
                                        className="checkbox checkbox-xs"
                                    />
                                    <span className="text-sm font-light font-kanit hover:font-bold">
                                        {_data.name}
                                    </span>
                                </div>
                            ))}
                        </>
                    }

                </div>
            </div>
        </div>
    )
}