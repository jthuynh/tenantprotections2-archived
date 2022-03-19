/** @jsxImportSource @emotion/react */

const styles = {
  container: {
    border: "1px solid #ccc",
    backgroundColor: "#eee",
    display: "inline-block",
    padding: 20,
    borderRadius: 4,
  },
  rentBox: {
    border: "1px solid #ccc",
    display: "inline-block",
    padding: "10px 30px",
    margin: 0,
    borderRadius: 4
  }
}

const RentAlert = ({rentHistory}) => (
  <div css={styles.container}>
    <p>{rentHistory[0].startDate} ${rentHistory[0].rent}</p>
    <p>This rent increase may be illegal. Here are resources to help.</p>
    <h3>[city] Max Rent</h3>
    <p>10% max increase per year * ${rentHistory[1].rent} =</p>
    <p css={styles.rentBox}>${rentHistory[1].rent * 1.1}</p>
    <h3>Statewide Max Rent</h3>
    <p>15% max increase per year * ${rentHistory[1].rent} =</p>
    <p css={styles.rentBox}>${rentHistory[1].rent * 1.15}</p>
  </div>
);

export default RentAlert;