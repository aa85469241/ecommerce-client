
import Image from "next/image"
import Link from "next/link"
import { redirect } from "next/navigation"
import FormSubmitButton from "@/components/Products/FormSubmitButton"
import { addProduct } from "@/actions/products/addProduct"
import { ShoppingBag } from "../../../../public/assets"
import { BsArrowLeft } from "react-icons/bs"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"


const AddProduct = async () => {
    const session = await getServerSession(authOptions);

    if (!session) redirect("/api/auth/signin?callbackUrl=/products/add-product")

    return (
        <section className="product-section lg:justify-center lg:items-center">
            <div className="
            relative 
            w-full 
            max-w-4xl 
            flex 
            flex-col 
            items-center 
            gap-4 
            border-2
            border-stone-300/50 
            rounded-lg 
            shadow-xl 
            py-4 
            overflow-hidden
            lg:flex-row 
            lg:justify-between 
            lg:px-4"
            >
                <span
                    id="decoration"
                    className="w-full h-full absolute top-0 left-0 -translate-x-2 -translate-y-2 rounded-lg clip-path-polygon-mobile md:clip-path-polygon-normal bg-slate-400"
                />
                <div className="relative flex-1 flex lg:flex-col lg:pl-8 items-center justify-center h-96 text-center z-10">
                    <h1 className="text-3xl capitalize text-gray-900/80 tracking-wider font-kanit mr-2 md:text-4xl md:mr-0">Adding</h1>
                    <h1 className="text-3xl capitalize text-gray-900/80 tracking-wider font-kanit md:text-4xl">
                        New product
                    </h1>
                    <Image
                        src={ShoppingBag}
                        alt="shopping-bag"
                        priority
                        fill
                        className="hidden lg:block"
                    />
                </div>
                <form
                    className="w-full max-w-md z-10"
                    action={addProduct}
                >
                    <div className="w-full mb-2">
                        <input
                            required
                            type="text"
                            name="name"
                            placeholder="product name"
                            className="input input-bordered w-full"
                        />
                    </div>
                    <textarea
                        required
                        name="description"
                        cols={30}
                        rows={5}
                        className="textarea textarea-bordered w-full"
                    />
                    <div className="w-full mb-2">
                        <input
                            required
                            type="text"
                            name="imgUrl"
                            placeholder="image url"
                            className="input input-bordered w-full"
                        />
                    </div>
                    <div className="w-full mb-2">
                        <input
                            required
                            type="number"
                            name="price"
                            placeholder="price"
                            className="input input-bordered w-full"
                        />
                    </div>
                    <FormSubmitButton
                        className="w-full shadow-md"
                    >
                        Add Product
                    </FormSubmitButton>
                    <div className="w-full mt-4 text-end">
                        <Link href="/products">
                            <button
                                className="
                                tracking-wider 
                                text-sm
                                pr-2
                                hover:animate-pulse
                            "
                            >
                                <BsArrowLeft className="inline-block mr-2" />
                                back to products page
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default AddProduct