import React, { useState } from 'react'
import logo from '../images/amazon_footer.png'

function Footer() {

    const styles={
        container:{
            color: 'white'
        },
        backtotop:{
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#37475a',
            height: '50px'
        },
        linkscontainer:{
            backgroundColor: '#232f3e',
            paddingTop: '40px',
        },
        links:{
            display: 'flex',
            justifyContent: 'space-evenly',
        },
        linkscolumns:{
            display: 'inline-flex',
            flexDirection: 'column'
        },
        linkscolumnsheader:{
            fontWeight: 'bold',
            marginTop: '6px',
            marginBottom: '14px',
        },
        linkscolumnsitems:{
            cursor: 'pointer',
            marginBottom: '10px',
            fontSize: '14px'
        },
        logocontainer:{
            display: 'flex',
            height: '150px',
            marginTop: '40px',
            justifyContent: 'space-evenly',
            borderTopWidth: '1px',
            borderTopColor: '#3a4553',
            borderTopStyle: 'solid',
        },
        logocontainercontent:{
            display: 'inline-flex',
            marginTop: 'auto',
            marginBottom: 'auto',
        },
        logo:{
            cursor: 'pointer',
            width: 'auto',
            height: '40px',
            margin: '10px',
            marginRight: '100px'
        },
        button:{
            cursor: 'pointer',
            borderWidth: '1px',
            borderColor: '#848688',
            borderStyle: 'solid',
            borderRadius: '3px',
            padding: '10px',
            margin: '10px'
        },
        conditions:{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#131a22',
            height: '100%'
        },
        conditionsitem:{
            cursor: 'pointer',
            margin: '50px',
            marginRight: '10px',
            fontSize: '10pt'
        }
    }
    return(
        <div style={styles.container}>
            <div 
            style={styles.backtotop}
            onClick={()=>window.scrollTo(0,0)}
            >
                Back to top
            </div>
            <div style={styles.linkscontainer}>
                <div style={styles.links}>
                    <div style={styles.linkscolumns}>
                        <div style={styles.linkscolumnsheader}>Get to Know Us</div>
                        <div style={styles.linkscolumnsitems}>Careers</div>
                        <div style={styles.linkscolumnsitems}>Blog</div>
                        <div style={styles.linkscolumnsitems}>About Amazon</div>
                        <div style={styles.linkscolumnsitems}>Press Center</div>
                        <div style={styles.linkscolumnsitems}>Investor Relations</div>
                        <div style={styles.linkscolumnsitems}>Amazon Devices</div>
                        <div style={styles.linkscolumnsitems}>Amazon Tours</div>
                    </div>
                    <div style={styles.linkscolumns}>
                        <div style={styles.linkscolumnsheader}> Make Money with Us </div>
                        <div style={styles.linkscolumnsitems}>Sell products on Amazon</div>
                        <div style={styles.linkscolumnsitems}>Sell apps on Amazon</div>
                        <div style={styles.linkscolumnsitems}>Become an Affiliate</div>
                        <div style={styles.linkscolumnsitems}>Advertise Your Products</div>
                        <div style={styles.linkscolumnsitems}>Self-Publish with Us</div>
                        <div style={styles.linkscolumnsitems}>Host an Amazon Hub</div>
                        <div style={styles.linkscolumnsitems}>›See More Make Money with Us</div>
                    </div>
                    <div style={styles.linkscolumns}>
                        <div style={styles.linkscolumnsheader}>Amazon Payment Products </div>
                        <div style={styles.linkscolumnsitems}>Amazon Rewards Visa Signature Cards</div>
                        <div style={styles.linkscolumnsitems}>Amazon.com Store Card</div>
                        <div style={styles.linkscolumnsitems}>Amazon Business Card</div>
                        <div style={styles.linkscolumnsitems}>Amazon Business Line of Credit</div>
                        <div style={styles.linkscolumnsitems}>Shop with Points</div>
                        <div style={styles.linkscolumnsitems}>Credit Card Marketplace</div>
                        <div style={styles.linkscolumnsitems}>Reload Your Balance</div>
                        <div style={styles.linkscolumnsitems}>Amazon Currency Converter</div>
                    </div>
                    <div style={styles.linkscolumns}>
                        <div style={styles.linkscolumnsheader}> Let Us Help You </div>
                        <div style={styles.linkscolumnsitems}>Amazon and COVID-19</div>
                        <div style={styles.linkscolumnsitems}>Your Account</div>
                        <div style={styles.linkscolumnsitems}>Your Orders</div>
                        <div style={styles.linkscolumnsitems}>Shipping Rates & Policies</div>
                        <div style={styles.linkscolumnsitems}>Amazon Prime</div>
                        <div style={styles.linkscolumnsitems}>Returns & Replacements</div>
                        <div style={styles.linkscolumnsitems}>Manage Your Content and Devices</div>
                        <div style={styles.linkscolumnsitems}>Amazon Assistant</div>
                        <div style={styles.linkscolumnsitems}>Help</div>
                    </div>
                </div>
                <div   style={styles.logocontainer}>
                    <div style={styles.logocontainercontent}>
                        <img
                        id='logo'
                        style={styles.logo}
                        src={logo}
                    />
                    <div style={styles.button}>English</div>
                    <div style={styles.button}>United States</div>
                    </div>
                </div>
            </div>
            <div style={styles.conditions}>
                <div style={styles.conditionsitem}>Conditions of Use</div>
                <div style={styles.conditionsitem}>Privacy Notice</div>
                <div style={styles.conditionsitem}>Interest-Based Ads© </div>
                <div style={styles.conditionsitem}>1996-2020, Amazon.com, Inc. or its affiliates</div>
            </div>
        </div>
    )
}

export default Footer