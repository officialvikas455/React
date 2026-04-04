export default function Price({oldPrice, newPrice}){
    let oldStyles = {
        textDecorationLine : "line-though",
    };
    let newStyles= {
        fontWeight: "bold",
    };
    let styles = {
        backgroundColor : "#e0c367"
    }
    return (
        <div style={styles} >
            <span style= {oldStyles}>{oldPrice}</span>
           &nbsp;&nbsp;&nbsp;&nbsp;
            <span style={newStyles}>{newPrice}</span>
        </div>

    );

}