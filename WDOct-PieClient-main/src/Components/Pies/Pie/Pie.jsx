const Pie = (props) => {
  console.log(props)

  return (
    
    props.pies.map((pie, index) => {
        console.log(pie)
        return(
          <tr key={index}>
            <td>{pie.flavor}</td>
            <td>{pie.baseOfPie}</td>
            <td>{pie.size}</td>
            <td>{`${pie.vegan}`}</td>
            <td>{`${pie.hotPie}`}</td>
            <td>{pie.crust}</td>
          </tr>
        )
    })
    
  )
}

export default Pie;