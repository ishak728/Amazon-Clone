import React, { createContext, useState,useEffect } from 'react';
 

export const AddressContext = createContext()

export const AddressProvider = ({ children }) => {
    const [address, setAddress] = useState({
		"country": "United State",
		"fullName": "Ishak Erdogan",
		"phone": "7019785234",
		"street": "1-23 2th ave astoria",
		"building": "apt floor 1",
		"city": "new york",
		"state": "new york",
		"postalCode": "11234",
		"_id": "67005cbc7fb14afe2f77427e"
	})

 

    return (
        <AddressContext.Provider value={{ address, setAddress }}>
            {children}
        </AddressContext.Provider>
    )
}