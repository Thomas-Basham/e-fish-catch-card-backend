const getAllCatchCards = async (req, res, next) => {
  try {
    console.log("Getting all employees");
    const employees = await fireStore.collection("catch-cards");
    const data = await employees.get();
    const arr = [];
    if (data.empty) {
      res.status(200).json({ message: "No records found" });
    } else {
      let total = 0;
      data.forEach((item) => {
        const employee = new Employee(
          item.id,
          item.data().fullName,
          item.data().age,
          item.data().contact,
          item.data().department
        );
        arr.push(employee);
        total = total + 1;
      });
      res.status(200).json({
        listing: arr,
        count: total,
      });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = getAllCatchCards;
