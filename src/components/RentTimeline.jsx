/** @jsxImportSource @emotion/react */
import { Component } from 'react';
import TimelineItem from './TimelineItem';
import TextArea from './TextArea';
import HouseImage from './HouseImage';
import '../../src/index.css'

class RentTimeline extends Component {
  render() {
    let counter = 0;

    return (
      <ul className='calculator-container'>
        <li key={counter}>
        <div className='logo-area'>
            <HouseImage />
            <div>
              ZIPCODE
              {/* zipcode: {this.props.zip}, [city]&nbsp; */}
              <TextArea
                btnType={'edit-zip-btn'}
                boldText={this.props.zip}
                regText={this.props.city}
                onClick={() => this.props.editZip()}
                penPos={'zip-pen-pos'}
              />
            </div>

          </div>
          {/* zipcode: {this.props.zip}, {this.props.city}&nbsp;
          <button type="button" onClick={() => this.props.editZip()}>Edit</button> */}
        </li>
        <div className='timeline'>
          {this.props.rentHistory.length !== 0 ?
            (<p className="rent-change-title">Date of rate change<span className="tab"></span>Rent</p>) : 
            (<p className="rent-change-title"><br/><br/><br/></p>)}
          {
            this.props.rentHistory.map(({ rent, startDate }) => {

              return <li key={counter++} >

                <TimelineItem
                  // btnType={'edit-rent-btn arrow_box'}
                  boldText={rent}
                  regText={startDate}
                  onClick={() => this.props.editRent(rent, startDate)}
                // content={<TextArea
                //   btnType={'edit-rent-btn arrow_box'}
                //   boldText={rent}
                //   regText={startDate}

                // />}
                />

                {/* date: {startDate}, rent: ${rent}&nbsp;
                <button type="button" onClick={() => this.props.editRent(rent, startDate)}>Edit</button> */}
              </li>
            })
          }
          {
            this.props.showMore ?
              <li key={counter} >
                {/* <TimelineItem 
                
                /> */}
                Did your rent increase more than once?&nbsp;
                <button type="button" onClick={() => this.props.addMoreRent()}>Yes, add more</button>
              </li>
              : null
          }
        </div>
      </ul>
    );
  }
}

export default RentTimeline;