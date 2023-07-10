import './App.css';
import React, { useState, useRef, useEffect } from 'react'
// import Axios from 'axios'


function App() {
  const sectorList = [
    {
      id: 1,
      name: "S",
      sector: "A",
      isAgreed: true
    },
    {
      id: 2,
      name: "W",
      sector: "F",
      isAgreed: true
    },
  ]

  const [list, setList] = useState(sectorList)
  const [id, setId] = useState(list.length+1)
  const [sectorListOption, setSectorListOption] = useState([])
  const [name, setName] = useState("");
  const [sector, setSector] = useState("");
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    setSectorListOption(sectorList);
  }, [])

  const nameRef = useRef()
  const sectorRef = useRef()
  const agreeRef = useRef()

  const showFormToggle = (event) => {
    setShowForm(!showForm);
  }

  const edit = (e, sectId) => {
    e.preventDefault();
    let sectName = e.target.elements.name.value;
    let setcorInvolved = e.target.elements.sector.value;
    const sec = setList.map((sect) => 
      sect.id === sectId ? {sectId, sectName, setcorInvolved} : sect
    );
    setList(sec);
    showFormToggle();
    }

  function saveSector(event) {
    event.preventDefault()
    const name = event.target.elements.name.value
    const sector = event.target.elements.sector.value
    const agree = event.target.elements.agree.checked == true ? true : false

    setId(id+1);

    const newSector = {
      id: id,
      name,
      sector,
      agree
    }
    
    setList((oldList) => {
      return oldList.concat(newSector)
    })

    nameRef.current.value = ""
    // sectorRef.current.value = ""
    agreeRef.current.checked = false

  }

  function editSector() {
    return (
      <tr>
        <td><input type="text" name='name' /></td>
        <td><input type="text" name='name' /></td>
      </tr>
    )
  }

  return (
    <>
    <div className="App">
      <div className='sec-que'>
        <form action="" onSubmit={saveSector} className="sec-form">
            <h4>Please enter your name and pick the Sectors you are currently involved in.</h4>
           <div>
           <label htmlFor="">Name : </label>
            <input type="text" name='name' required ref={nameRef} style={{width: 480, padding: 10, marginLeft: 12}}/>
           </div>
           <div>
           <label htmlFor="">Sectors :</label>
            <select multiple="" name="sector" required ref={sectorRef} style={{marginLeft: 6}}>
                      <option value="Manufacturing">Manufacturing</option>
                      <option value="Construction materials">&nbsp;&nbsp;&nbsp;&nbsp;Construction materials</option>
                      <option value="Electronics and Optics">&nbsp;&nbsp;&nbsp;&nbsp;Electronics and Optics</option>
                      <option value="Food and Beverage">&nbsp;&nbsp;&nbsp;&nbsp;Food and Beverage</option>
                      <option value="Bakery &amp; confectionery products">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bakery &amp; confectionery products</option>
                      <option value="Beverages">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Beverages</option>
                      <option value="Fish &amp; fish products">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fish &amp; fish products </option>
                      <option value="Meat &amp; meat products">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Meat &amp; meat products</option>
                      <option value="Milk &amp; dairy products">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Milk &amp; dairy products </option>
                      <option value="Other">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Other</option>
                      <option value="Sweets &amp; snack food">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sweets &amp; snack food</option>
                      <option value="Furniture">&nbsp;&nbsp;&nbsp;&nbsp;Furniture</option>
                      <option value="Bathroom/sauna">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bathroom/sauna </option>
                      <option value="Bedroom">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bedroom</option>
                      <option value="Childrenâ€™s room">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Childrenâ€™s room </option>
                      <option value="Kitchen">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kitchen </option>
                      <option value="Living room">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Living room </option>
                      <option value="Office">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Office</option>
                      <option value="Other (Furniture)">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Other (Furniture)</option>
                      <option value="Outdoor">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Outdoor </option>
                      <option value="Project furniture">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Project furniture</option>
                      <option value="Machinery">&nbsp;&nbsp;&nbsp;&nbsp;Machinery</option>
                      <option value="Machinery components">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Machinery components</option>
                      <option value="Machinery equipment/tools">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Machinery equipment/tools</option>
                      <option value="Manufacture of machinery">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Manufacture of machinery </option>
                      <option value="Maritime">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Maritime</option>
                      <option value="Aluminium and steel workboats">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aluminium and steel workboats </option>
                      <option value="Boat/Yacht building">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Boat/Yacht building</option>
                      <option value="Ship repair and conversion">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ship repair and conversion</option>
                      <option value="Metal structures">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Metal structures</option>
                      <option value="Other">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Other</option>
                      <option value="Repair and maintenance service">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Repair and maintenance service</option>
                      <option value="Metalworking">&nbsp;&nbsp;&nbsp;&nbsp;Metalworking</option>
                      <option value="Construction of metal structures">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Construction of metal structures</option>
                      <option value="Houses and buildings">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Houses and buildings</option>
                      <option value="Metal products">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Metal products</option>
                      <option value="Metal works2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Metal works</option>
                      <option value="CNC-machining">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CNC-machining</option>
                      <option value="Forgings, Fasteners">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Forgings, Fasteners </option>
                      <option value="Gas, Plasma, Laser cutting">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gas, Plasma, Laser cutting</option>
                      <option value="MIG, TIG, Aluminum welding">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MIG, TIG, Aluminum welding</option>
                      <option value="Plastic and Rubber">&nbsp;&nbsp;&nbsp;&nbsp;Plastic and Rubber</option>
                      <option value="Packaging">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Packaging</option>
                      <option value="Plastic goods">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Plastic goods</option>
                      <option value="Plastic processing technology">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Plastic processing technology</option>
                      <option value="Blowing">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Blowing</option>
                      <option value="Moulding">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Moulding</option>
                      <option value="Plastics welding and processing">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Plastics welding and processing</option>
                      <option value="Plastic profiles">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Plastic profiles</option>
                      <option value="Printing">&nbsp;&nbsp;&nbsp;&nbsp;Printing </option>
                      <option value="Advertising">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Advertising</option>
                      <option value="Book/Periodicals printing">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Book/Periodicals printing</option>
                      <option value="Labelling and packaging printing">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Labelling and packaging printing</option>
                      <option value="Textile and Clothing">&nbsp;&nbsp;&nbsp;&nbsp;Textile and Clothing</option>
                      <option value="Clothing">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Clothing</option>
                      <option value="Textile">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Textile</option>
                      <option value="Wood">&nbsp;&nbsp;&nbsp;&nbsp;Wood</option>
                      <option value="Other (Wood)">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Other (Wood)</option>
                      <option value="Wooden building materials">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wooden building materials</option>
                      <option value="Wooden houses">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wooden houses</option>
                      <option value="Other">Other</option>
                      <option value="Creative industries">&nbsp;&nbsp;&nbsp;&nbsp;Creative industries</option>
                      <option value="Energy technology">&nbsp;&nbsp;&nbsp;&nbsp;Energy technology</option>
                      <option value="Environment">&nbsp;&nbsp;&nbsp;&nbsp;Environment</option>
                      <option value="Service">Service</option>
                      <option value="Business services">&nbsp;&nbsp;&nbsp;&nbsp;Business services</option>
                      <option value="Engineering">&nbsp;&nbsp;&nbsp;&nbsp;Engineering</option>
                      <option value="Information Technology and Telecommunications">&nbsp;&nbsp;&nbsp;&nbsp;Information Technology and Telecommunications</option>
                      <option value="Data processing, Web portals, E-marketing">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Data processing, Web portals, E-marketing</option>
                      <option value="Programming, Consultancy">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Programming, Consultancy</option>
                      <option value="Software, Hardware">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Software, Hardware</option>
                      <option value="Telecommunications">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Telecommunications</option>
                      <option value="Tourism">&nbsp;&nbsp;&nbsp;&nbsp;Tourism</option>
                      <option value="Translation services">&nbsp;&nbsp;&nbsp;&nbsp;Translation services</option>
                      <option value="Transport and Logistics">&nbsp;&nbsp;&nbsp;&nbsp;Transport and Logistics</option>
                      <option value="Air">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Air</option>
                      <option value="Rail">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rail</option>
                      <option value="Road">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Road</option>
                      <option value="Water">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Water</option>
            </select>
           </div>
            <div>
            <input type="checkbox" id='agree' name='agree' required ref={agreeRef} style={{marginLeft: -400, marginTop: 10}}/>
            <label style={{marginLeft: -200 }} htmlFor="agree">Agree to terms</label>
            </div>
            <button className='btn'>Save</button>
        </form>
      </div>
      <h2>Sector List</h2>
      <div className='sec-list'>
      <table id='customers'>
        <tr>
          <th>Name</th>
          <th>Sector</th>
          <th>Terms Of Agreement</th>
          <th></th>
        </tr>
        {
          list.map((sec, key) => (
            <tr key={key}>
              <td>{sec.id}</td>
              <td>{sec.sector}</td>
              <td>{sec.agree}Agreed</td>
              <td>
              <button className="update_user_btn" onClick={() => {
                      setId(sec._id);
                      setName(sec.name);
                      setSector(sec.sector);
                      showFormToggle()
                    }}>Edit</button>
                    {showForm && (
                    <div className="add_form">
                    <button className="close" onClick={() => {
                      setId('')
                      setName('');
                      setSector('');
                      showFormToggle();
                    }}>X</button>
                    <form onSubmit={() => {edit(sec.id)}}>
                    <h2>Update User</h2>
                        <div className="que">
                        <label htmlFor="">Name</label>
                        <input required type="text" value={name} onChange={(event) => {setName(event.target.value)}} />
                        </div>
                        <div className="que">
                        <label htmlFor="">Sector</label>
                        <input required type="text" value={sector} onChange={(event) => {setSector(event.target.value)}} /><br />
                        </div>
                        <button className="save" type="submit">Save</button>
                    </form>
                    </div>
                    )}
              </td>
            </tr>
          ))
        }
      </table>
      </div>
    </div>
    </>
  );
}

export default App;
