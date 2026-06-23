import react from "react";

const product = ({name,price,color,data ={ } }) => {
    console.log(data.ram);

    return(
        <div>
        <h1>Brand - {name}</h1>
        <h2>Price - {price}</h2>
        <h3>Color - {color}</h3>
        {data.ram && (
            <>
        <p>ram    -{data.ram}</p>
        <p>rom    -{data.rom}</p>
        <p>chip    -{data.chip}</p>
        </>
        ) }

        </div>
    )
}
export default product;