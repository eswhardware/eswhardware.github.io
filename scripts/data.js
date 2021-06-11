const systemInfo = {

    "ES-1000": {
        systemType: "Single Hung Window",
        egress: true,
        configurations: {standardSill: {heightDiscount: 6.5625,
                                        widthDiscount: 6,                                        
                                        widthDivider: 1,
                                        heightDivider: 2,},
                                        
                         highSill: {heightDiscount: 6.8125,
                                    widthDiscount: 6,
                                    widthDivider: 1,
                                    heightDivider: 2,},
                                    
                            oriel:{sSillDiscount: 8.313,
                                   hSillDiscount: 8.94,
                                   widthDiscount: 6,
                                   
                                   widthDivider: 1,
                                   heightDivider: 2}} 
    },

    "ES-1050": {
        systemType: "Single Hung Window",
        egress: true,
        configurations: {standardSill: {heightDiscount: 5.9375,
                                        widthDiscount: 6,                                        
                                        widthDivider: 1,
                                        heightDivider: 2},
                                        
                         highSill: {heightDiscount: 6.25,
                                    widthDiscount: 6,                                    
                                    widthDivider: 1,
                                    heightDivider: 2,},
                                    
                            oriel:{sSillDiscount: 8.313,
                                hSillDiscount: 8.94,
                                widthDiscount: 6,                                
                                widthDivider: 1,
                                heightDivider: 2}}  
    },

    "ES-1100": {
        systemType: "Single Hung Window",
        egress: true,
        configurations: {highSill: {heightDiscount: 6.8125,
                                        widthDiscount: 6,
                                        widthDivider: 1,
                                        heightDivider: 2},
                              
                                oriel:{sSillDiscount: 0,
                                    hSillDiscount: 8.94,
                                    widthDiscount: 6,                                    
                                    widthDivider: 1,
                                    heightDivider: 2}}  
    },

    "ES-1150": {
        systemType: "Single Hung Window",
        egress: true,
        configurations: {highSill: {heightDiscount: 6.25,
                                        widthDiscount: 6,                                        
                                        widthDivider: 1,
                                        heightDivider: 2},
                              
                            oriel:{sSillDiscount: 0,
                                hSillDiscount: 8.94,
                                widthDiscount: 6,                                
                                widthDivider: 1,
                                heightDivider: 2}}  
    },

    "ES-2000": {
        systemType: "Horizontal Sliding Window",
        egress: true,       
        configurations: {"OX/XO - STD SILL": {heightDiscount: 6.8125,
                                   widthDiscount: 4.5625,                    
                                   widthDivider: 2,
                                   heightDivider: 1},    

                        "OX/XO - HIGH SILL": {heightDiscount: 7.25,
                                    widthDiscount: 4.5625,
                                    widthDivider: 2,
                                    heightDivider: 1},

                        "XOX - STD SILL": {heightDiscount: 6.8125,
                                    widthDiscount: 5.1875,                                   
                                    widthDivider: 3,
                                    heightDivider: 1},
                                    
                        "XOX - HIGH SILL": {heightDiscount: 7.25,
                            widthDiscount: 5.1875,                                   
                            widthDivider: 3,
                            heightDivider: 1},

                        "XOX [1/4-1/2-1/4] - STD SILL": {heightDiscount: 6.8125,
                            widthDiscount: 2.625,                                   
                            widthDivider: 4,
                            heightDivider: 1},
                                    
                        "XOX [1/4-1/2-1/4] - HIGH SILL": {heightDiscount: 7.25,
                            widthDiscount: 2.625,                                   
                            widthDivider: 4,
                            heightDivider: 1}
                        }                        
    },

    "ES-2050": {
        systemType: "Horizontal Sliding Window",  
        egress: true,     
        configurations: {"OX/XO - STD SILL": {heightDiscount: 6.8125,
                                   widthDiscount: 4.8125,                    
                                   widthDivider: 2,
                                   heightDivider: 1},    

                        "OX/XO - HIGH SILL": {heightDiscount: 7.25,
                                    widthDiscount: 4.8125,
                                    widthDivider: 2,
                                    heightDivider: 1},

                        "XOX - STD SILL": {heightDiscount: 6.8125,
                                    widthDiscount: 5.875,                                   
                                    widthDivider: 3,
                                    heightDivider: 1},
                                    
                        "XOX - HIGH SILL": {heightDiscount: 7.25,
                            widthDiscount: 5.875,                                   
                            widthDivider: 3,
                            heightDivider: 1},

                        "XOX [1/4-1/2-1/4] - STD SILL": {heightDiscount: 6.8125,
                            widthDiscount: 2.375,                                   
                            widthDivider: 4,
                            heightDivider: 1},
                                    
                        "XOX [1/4-1/2-1/4] - HIGH SILL": {heightDiscount: 7.25,
                            widthDiscount: 2.375,                                   
                            widthDivider: 4,
                            heightDivider: 1}
                        }                        
    },

    "ES-2100": {
        systemType: "Horizontal Sliding Window",
        egress: true,       
        configurations: {"OX/XO - STD SILL": {heightDiscount: 7.25,
                                                widthDiscount: 4.5625,                    
                                                widthDivider: 2,
                                                heightDivider: 1},    

                        "XOX - STD SILL": {heightDiscount: 7.25,
                                            widthDiscount: 5.1875,                                   
                                            widthDivider: 3,
                                            heightDivider: 1},                                

                        "XOX [1/4-1/2-1/4] - STD SILL": {heightDiscount: 7.25,
                                                            widthDiscount: 2.625,                                   
                                                            widthDivider: 4,
                                                            heightDivider: 1},
                                
                        }                        
    },

    "ES-2150": {
        systemType: "Horizontal Sliding Window",
        egress: true,       
        configurations: {"OX/XO - STD SILL": {heightDiscount: 7.25,
                                   widthDiscount: 4.8125,                    
                                   widthDivider: 2,
                                   heightDivider: 1},    

                        "XOX - STD SILL": {heightDiscount: 7.25,
                                    widthDiscount: 5.875,                                   
                                    widthDivider: 3,
                                    heightDivider: 1},                                

                        "XOX [1/4-1/2-1/4] - STD SILL": {heightDiscount: 7.25,
                            widthDiscount: 2.375,                                   
                            widthDivider: 4,
                            heightDivider: 1},
                                
                        }                        
    },

    "ES-5000": {
        systemType: "Project Window",
        egress: true,
        configurations: {"X": {heightDiscount: 6,
                               widthDiscount: 7.0625,
                               widthDivider: 1,
                               heightDivider: 1},
                    
                        "XX": {heightDiscount: 6,
                               widthDiscount: 6.4375,
                               widthDivider: 2,
                               heightDivider: 1}}  
    },

    "ES-9000": {
        systemType: "Swing Door",
        accessibility: true,
        configurations: {"X": {heightDiscount: 0,
                               widthDiscount: 8.375,
                               widthDivider: 1,
                               heightDivider: 1},
                    
                        "XX": {heightDiscount: 0,
                               widthDiscount: 6,
                               widthDivider: 2,
                               heightDivider: 1},

                        "X - ES-8000 FRAME": {heightDiscount: 0,
                        widthDiscount: 6.8775,
                        widthDivider: 1,
                        heightDivider: 1},
                     
                         "XX - ES-8000 FRAME": {heightDiscount: 0,
                                widthDiscount: 5.25,
                                widthDivider: 2,
                                heightDivider: 1}}  
    },


    // "ES-EL100": {
    //     systemType: "Single Hung Window",
    //     egress: true,
    //     configurations: {standardSill: {heightDiscount: 7.9375,
    //                                     widthDiscount: 5.625,
    //                                     minFrameWidth: 20 + 5.625,
    //                                     widthDivider: 1,
    //                                     heightDivider: 2,},
                                        
    //                      highSill: {heightDiscount: 8.125,
    //                                 widthDiscount: 5.625,
    //                                 minFrameWidth: 20 + 5.625,
    //                                 widthDivider: 1,
    //                                 heightDivider: 2,},
                                    
    //                         oriel:{hSillDiscount: 8.125,
    //                                sSillDiscount: ,
    //                                widthDiscount: 5.625,
    //                                minFrameWidth: 20 + 5.625,
    //                                widthDivider: 1,
    //                                heightDivider: 2}} 

    // },

    // "ES-EL200": {
    //     systemType: "Horizontal Sliding Window",
    //     egress: true,       
    //     configurations: {"OX/XO": {heightDiscount: 6.125,
    //                                widthDiscount: 8.25,
    //                                minFrameWidth: 20 + 8.25,
    //                                widthDivider: 2,
    //                                heightDivider: 1},                                   
    //                         "XOX": {heightDiscount: 6.125,
    //                                 widthDiscount: 3.875,
    //                                 minFrameWidth: 20 + 3.875,
    //                                 widthDivider: 3,
    //                                 heightDivider: 1}       
    //                     }                        
    // },

    // "ES-H340": {
    //     systemType: "Single Hung Window",
    //     egress: true,
    // },

    
}

// module.exports =  systemInfo;