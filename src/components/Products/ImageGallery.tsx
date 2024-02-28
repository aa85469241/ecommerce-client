'use client'

import Image from "next/image";
import { Image as ImageType } from "@/types"
import { Tab } from "@headlessui/react";

interface ImageGalleryProps {
    images: ImageType[];
}

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({
    images
}) => {
    return (
        <Tab.Group
            as="div"
            className="max-w-md flex flex-col-reverse justify-center gap-4 mx-auto"
        >
            <div className="mx-auto w-full">
                <Tab.List className="grid grid-cols-4 gap-4">
                    {images.map((image) => (
                        <Tab
                            key={image.id}
                            className={({ selected }) =>
                                classNames(
                                    'relative aspect-square flex items-center justify-center rounded-md bg-white overflow-hidden',
                                    'ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                    selected
                                        ? 'ring-2 outline-none'
                                        : ''
                                )
                            }
                        >
                            <Image
                                src={image.url}
                                alt="image-tab"
                                fill
                                priority
                                sizes="medium"
                                className="object-cover object-center"
                            />
                        </Tab>
                    ))}
                </Tab.List>
            </div>
            <Tab.Panels className="aspect-square w-full">
                {images.map((image) => (
                    <Tab.Panel key={image.id}>
                        <div className="relative aspect-square w-full h-full rounded-md overflow-hidden">
                            <Image
                                src={image.url}
                                alt="Image"
                                fill
                                className="object-cover object-center"
                            />
                        </div>
                    </Tab.Panel>
                ))}
            </Tab.Panels>
        </Tab.Group>
    )
}