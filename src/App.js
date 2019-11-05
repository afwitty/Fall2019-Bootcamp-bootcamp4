import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 0,
      bldgList: [],
      deleteindex: -1,
      inputValue: ''
    };
  }

  componentWillMount() {
    this.setState ({
      bldgList: this.props.data
    })
  }

  filterUpdate(value) {
    this.setState({
      filterText: value
    })
  }

  selectedUpdate(id) {
    const selection = id
    this.setState({
      selectedBuilding: selection
    })
  }

  deleteUpdate(element) {
    var index = this.state.bldgList.indexOf(element);
    this.state.bldgList.splice(index, 1);
  }

  addUpdate(code, name, address) {
    const newBldgList = this.bldgList.push(code, name, address);
    console.log("HUAHUAHUAHUAHUAHUA: "+newBldgList);
  }

  render() { 
    const code = '';
    const name = '';
    const address = '';
    return (
      <div className="bg">
        <div className="row">
          <h1>UF Directory App</h1>
        </div>
 
        <Search
        filterText = {this.state.filterText}
        filterUpdate = {this.filterUpdate.bind(this)} 
        />
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                  <BuildingList
                    filterText = {this.state.filterText}
                    bldgList = {this.state.bldgList}
                    selectedUpdate = {this.selectedUpdate.bind(this)}
                    deleteUpdate = {this.deleteUpdate.bind(this)}
                  />
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding 
                selectedBuilding = {this.state.selectedBuilding}
                bldgList = {this.state.bldgList}
              />
              <ul>
                <p>
                  {' '}
                  <b>Add a Listing</b>
                </p>
              </ul>
              <form>
              <input 
                id = "inputCode"
                type = "text"
                ref = {(value) => {this.code = value}}
                placeholder = "Add Building Code"
				      />

              <input 
                id = "inputName"
                type = "text"
                ref = {(value) => {this.name = value}}
                placeholder = "Add Building Name"
				      />

              <input 
                id = "inputAddress"
                type = "text"
                ref = {(value) => {this.address = value}}
                placeholder = "Add Building Address"
				      />
              <button onClick = {(e) => {this.addUpdate(code, name, address); e.preventDefault(); e.stopPropagation()}}>Add</button>
              </form>
            </div>
          </div>
          <Credit />
        </main>
      </div>
    )
  }
}

export default App;
