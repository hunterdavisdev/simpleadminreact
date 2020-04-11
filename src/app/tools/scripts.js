import axios from "axios";

exports.reindexSearch = async accountUrl => {
  try {
    await axios.get(`${accountUrl}/internal/delete_all_members`);
    await axios.get(`${accountUrl}/internal/import_all_members`);
    alert("Done!");
  } catch (err) {
    console.error(err.message);
  }
};

exports.fixDuplicateFamilies = async accountUrl => {
  try {
    await axios.get(`${accountUrl}/internal/fixduplicatefamily`);
    await axios.get(`${accountUrl}/internal/fixduplicatefamily`);
    alert("Done!");
  } catch (err) {
    console.error(err.message);
  }
};

/**
 * TODO: Pull the number of gifts associated out of the html response
 */
exports.associateGiving = async accountUrl => {
  try {
    await axios.get(`${accountUrl}/internal/asscociate_gifts_with_pledges`);
    alert("Done!");
  } catch (err) {
    console.error(err.message);
  }
};

exports.fixLastAttendedDate = async accountUrl => {
  try {
    await axios.get(`${accountUrl}/internal/fixlastattendeddate`);
    alert("Done!");
  } catch (err) {
    console.error(err.message);
  }
};
