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

const RentAlert = ({city, rentHistory}) => (
  <div css={styles.container}>
    <p>This rent increase may be illegal. Here are resources to help.</p>
    <h3>{city} Max Rent</h3>
    <p>{rentHistory[0].maxIncrease} max increase per year * ${rentHistory[1].rent} =</p>
    <p css={styles.rentBox}>${Number(rentHistory[1].rent) * (1 + Number(rentHistory[0].maxIncrease))}</p>
    <h3>Statewide Max Rent</h3>
    <p>XX% max increase per year * ${rentHistory[1].rent} =</p>
    <p css={styles.rentBox}>$xxxx</p>
  </div>
);

export default RentAlert;