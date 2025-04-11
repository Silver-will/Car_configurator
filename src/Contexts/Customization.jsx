import { createContext, useContext, useState } from "react";

const CustomizationContext = createContext();

export const carPaintPrimaryColors = [
    {
      color: [192,192,192],
      name: "silver",
    },
    {
      color: [26,94,26],
      name: "green",
    },
    {
      color: [218,165,32],
      name: "gold",
  },
  {
    color: [184, 115, 51],
    name: "copper",
  },
    ];

  export const carPaintSecondaryColors = [
    {
      color: [218,165,32],
      name: "gold",
    },
    {
      color: [137, 101, 153],
      name: "mauve",
    },
    {
      color: [184, 115, 51],
      name: "copper",
    },
    {
      color: [34, 34, 34],
      name: "black",
    },
    {
      color: [236, 236, 236],
      name: "white",
    },
  ];
 
  export const sideMirrorSecondaryColor = [
    {
      color: [255, 127, 80],
      name: "coral",
    },
    {
      color: [0, 0, 128],
      name: "magenta",
    },
    {
      color: [123, 17, 19],
      name: "maroon",
    },
    {
      color: [0, 255, 0],
      name: "Lime",
    },
    {
      color: [248, 248, 255],
      name: "silver",
    },
    {
      color: [34, 34, 34],
      name: "black",
    },
    {
      color: [236, 236, 236],
      name: "white",
    },
  ];
  
  export const sideMirrorPrimaryColor = [
    {
      color: [192,192,192],
      name: "silver",
    },
    {
      color: [34, 34, 34],
      name: "black",
    },
    {
      color: [218,165,32],
      name: "gold",
  },
  {
    color: [184, 115, 51],
    name: "copper",
  },
  ];
  

export const CustomizationProvider = ({ children }) => {
    const [tires, setTires] = useState(0);
    const [sideMirrors, setSideMirrors] = useState(0);
    const [sideMirrorPrimary, setSideMirrorsPrimaryColors] = useState(sideMirrorPrimaryColor[0]); 
    const [sideMirrorSecondary, setSideMirrorsSecondaryColors] = useState(sideMirrorSecondaryColor[0]);  
    const [carPaintPrimary, setCarPaintPrimaryColors] = useState(carPaintPrimaryColors[0]);
    const [carPaintSecondary, setCarPaintSecondaryColors] = useState(carPaintSecondaryColors[0]);
    
    return <CustomizationContext.Provider
        value={{
            tires,
            setTires,
            sideMirrors,
            setSideMirrors,
            carPaintPrimary,
            setCarPaintPrimaryColors,
            carPaintSecondary,
            setCarPaintSecondaryColors,
            sideMirrorPrimary,
            setSideMirrorsPrimaryColors,
            sideMirrorSecondary,
            setSideMirrorsSecondaryColors,
    }}>
        {children}
    </CustomizationContext.Provider>
}

export const useCustomization = () => {
    return useContext(CustomizationContext);
}