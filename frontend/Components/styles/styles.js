import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#8ec3eb",
    justifyContent: "center",
    padding: 16,
    paddingVertical: 50,
  },
  headerText: {
    color: "white",
    fontSize: 28,
    marginBottom: 10,
    textAlign: "center",
  },
  input: {
    height: 40,
    width: 300,
    fontSize: 20,
    color: "white",
    alignSelf: "center",
    borderColor: "#2a6592",
    borderWidth: 2,
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  button: {
    marginBottom: 10, // spacing between buttons
    width: 150,
    padding: 15,
    borderRadius: 20,
    backgroundColor: "#2a6592",
    textAlign: "center",
  },
  message: {
    marginTop: 20,
    color: "green",
    textAlign: "center",
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: "auto",
    marginVertical: 5,
    borderRadius: 5,
  },
  item: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#dfdfdf",
    padding: 10,
    marginVertical: 5,
    boxShadow: "0 0 10px #ccc",
  },
  itemActions: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 12,
  },
  actionText: {
    color: "blue",
    marginHorizontal: 5,
  },
  title: {
    fontSize: 32,
  },
  description: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },

  img: {
    width: 150,
    height: 150,
    borderRadius: 50,
    margin: 10,
    alignSelf: "center",
  },
});
