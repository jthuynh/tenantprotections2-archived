import Button from "./Button"

const ZipcodeInput = ({ zip, onChange, onClick, btnText, btnType }) => {
    console.log(zip, onChange, onClick);
    return (
        <div className="input-container">
            <p>What is your zipcode?</p>
            <input defaultValue={zip} onChange={onChange} />

            <Button
                onClick={onClick}
                text={btnText}
                btnType={btnType}
            />
        </div>
    )
}

{/* <p>
            What is your zipcode?
          </p>
          <input defaultValue={this.state.zip} onChange={(e) => this.handleChange(e)} />
          <Button type="button" onClick={this.validate} text={'Next'} btnType={'primarybtn'}/> */}


export default ZipcodeInput