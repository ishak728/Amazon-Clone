import React, { createContext, useState,useEffect } from 'react';
 

export const AddressContext = createContext()

export const AddressProvider = ({ children }) => {
    const [address, setAddress] = useState({
		"country": "United State",
		"fullName": "Ishak Erdogan",
		"phone": "7019785365",
		"street": "18-19 27th ave astoria",
		"building": "apt floor 1",
		"city": "new york",
		"state": "new york",
		"postalCode": "11102",
		"_id": "67005cbc7fb14afe2f77427e"
	})

    useEffect(() => {
        console.log("address changed contextapi:",address)
    }, [address])

    return (
        <AddressContext.Provider value={{ address, setAddress }}>
            {children}
        </AddressContext.Provider>
    )
}