import React, { useState, useEffect } from 'react'

function Collections(props) {
  const [items, itemsSet] = useState()
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      flexShrink: 3,
      height: '420px',
      maxWidth: '350px',
      // minWidth: '300px',
      backgroundColor: 'white',
      marginLeft: '10px',
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      fontWeight: '700',
      fontSize: '21px',
      margin: '20px',
      height: '55px',
      textTransform: 'capitalize',
      backgroundColor: 'white',
    },
    row: {
      display: 'inline-flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      backgroundColor: 'white',
    },
    image: {
      margin: 'auto',
      marginBottom: '35px',
      height: '100px',
      // width: '128px',
      cursor: 'pointer',
    },
    shopnow: {
      color: '#0066c0',
      marginLeft: '20px',
      cursor: 'pointer',
    },
  }

  let renderRow = (imageName, imagePath) => {
    let result = []
    for (let i = 1; i <= 4; i++) {
      let image = imagePath + imageName + i + '.jpg'
      result.push(
        <img
          key={i}
          onClick={() => props.changePage('searchresults')}
          id={image}
          style={styles.image}
          src={require('../' + image)}
        />
      )
    }
    itemsSet(result)
  }

  useEffect(() => {
    renderRow(props.item.imageName, props.item.imagePath)
  }, [])

  return (
    <div id={props.item.imagePath} style={styles.container}>
      <div style={styles.header}>{props.item.title}</div>
      <div style={styles.row}>{items}</div>
      <div
        onClick={() => props.changePage('searchresults')}
        style={styles.shopnow}>
        Shop Now
      </div>
    </div>
  )
}

export default Collections
