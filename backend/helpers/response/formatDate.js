

module.exports.formatDate = (timestamp) => {
    console.log("Timestamp:", timestamp); // Check the value of timestamp
    const date = new Date(Number(timestamp)); // Ensure the timestamp is parsed as a number
    const day = ('0' + date.getDate()).slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}