import React, { useEffect, useState } from 'react'


function SearchResultSider() {
    const [sider, siderSet]= useState([])

    const siderItems = [
        'Electronics',
        'Tools & Home Improvement',
        'Industrial & Scientific',
        'Automotive Parts & Accessories',
        'Musical Instruments',
        'Cell Phones & Accessories',
        'Garden & Outdoor',
        'Home & Kitchen',
        'Health, Household & Baby Care',
        'Sports & Outdoors',
        'Beauty & Personal Care',
        'Toys & Games',
        'Pet Supplies',
        'Office Products',
        'Appliances',
        'Baby',
        'Grocery & Gourmet Food',
        'Everything Else',
        'Arts, Crafts & Sewing',
        'Clothing, Shoes & Jewelry',
        'Video Games',
        'Books',
        'CDs & Vinyl'
]
    const styles={
        container:{
            height: '100vh',
            minWidth: '300px'
        },
        header:{
            fontWeight: 'bold',
            margin: 10,
            marginLeft: 20,
        },
        sidercontainer:{
            margin: 5,
            borderRightWidth: 2,
            borderRightColor: '#ececec',
            borderRightStyle: 'solid',
        },
        sideritem:{   
            margin: 5,
            marginLeft: 20,
            cursor: 'pointer'
        }
    }

    const createSider=(array)=>{
        let result = []
        for(let i=0; i<array.length; i++){
            result.push(
            <div 
            key={i} 
            id={'sideritem'+i} 
            onMouseOver={(e)=>document.getElementById('sideritem'+i).style.color = '#db6800'} 
            onMouseLeave={(e)=>document.getElementById('sideritem'+i).style.color = 'black'}
            style={styles.sideritem}
            >
                {array[i]}
                </div>
                )
        }
        siderSet(
            <div style={styles.sidercontainer}>
                <div style={styles.header}>Department</div>
                {result}
            </div>)
    }

    useEffect(()=>{
        createSider(siderItems)
    },[])
    return(
        <div style={styles.container}>
   
            {sider}
        </div>
    )
}

export default SearchResultSider