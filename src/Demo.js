

function Home() {
    return (
        <h2>Home Page</h2>
    );
}

function Products() {
    return (
        <>
            <h2>List of Products</h2>
            <hr />

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Unit Price</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>P01</td>
                        <td>Coca Cola</td>
                        <td>12.5</td>
                        <td>available</td>
                    </tr>
                    <tr>
                        <td>P02</td>
                        <td>Pepsi Cola</td>
                        <td>11.9</td>
                        <td>out-stock</td>
                    </tr>
                    <tr>
                        <td>P03</td>
                        <td>Potato Snack </td>
                        <td>8.45</td>
                        <td>available</td>
                    </tr>
                    <tr>
                        <td>P04</td>
                        <td>Tea Milk</td>
                        <td>8</td>
                        <td>available</td>
                    </tr>
                    <tr>
                        <td>P05</td>
                        <td>Chocolate</td>
                        <td>16.75</td>
                        <td>available</td>
                    </tr>
                </tbody>
            </table>
        </>


    );
}

function Gallery() {
    const picts = [
        { id: "hinh 1", image: "p1.png" },
        { id: "hinh 2", image: "p2.png" },
        { id: "hinh 3", image: "p3.png" },
        { id: "hinh 4", image: "p4.png" }
    ]
    const root = process.env.PUBLIC_URL;
    const hinh = {
        padding : "10px"
    }
    return (
        <div>
            <h2>Gallery</h2>
            <hr />
            {
                picts.map(item =>
                    <>
                        <img src={`${root}/images/${item.image}`}
                             alt={item.id}
                             style={hinh} />
                    </>
                )
            }
        </div>
    );
}


function Contact() {
    return (
        <>
            <h2>Contact us</h2>
            <hr />
            <p>
                Email : small@gmail.com <br />
                Phone : 123456789 <br />
                Website : https://small-store.com <br />
                Address : 590 CMT8 - HCMC - VN
            </p>

        </>);
}


export { Home, Products, Gallery, Contact };