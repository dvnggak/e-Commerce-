
export default function Success() {

    return (
        <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src="https://i.ibb.co/RHDhb5r/9ccf7b00b9933758d84c8f6b2bf9185f.webp" alt="" style={{
          borderRadius: 50,
          maxWidth:200,
        }} />
        <button style={{ 
          padding: 10, 
          marginTop: 20, 
          backgroundColor:"teal",
          color:"white",
          borderRadius: 10,
          border:"none",
          fontSize: 25,
        }}>
          Successfull
        </button>
        <p>Your Order is being prepared. <br/> Thanks for choosing <b>Dev Tech</b></p>
      </div>
    )
}
