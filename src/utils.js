import toast from "react-hot-toast";

export const AddWatchlater = () =>
  toast.success("Added in Watchlater!", {
    style: {
      fontSize: "small",
      borderRadius: "10px",
      background: "#333",
      color: "#fff",
    },
  });

export const AddStared = () =>
  toast.success("Added in Stared!", {
    style: {
      fontSize: "small",
      borderRadius: "10px",
      background: "#333",
      color: "#fff",
    },
  });

export const RemoveStared = () =>
  toast.error("Removed in Stared!", {
    style: {
      fontSize: "small",
      borderRadius: "10px",
      background: "#333",
      color: "#fff",
    },
  });

export const RemoveWatchlater = () =>
  toast.error("Removed in Stared!", {
    style: {
      fontSize: "small",
      borderRadius: "10px",
      background: "#333",
      color: "#fff",
    },
  });

export const NewMovie = () =>
  toast.success("New Movie added!", {
    style: {
      fontSize: "small",
      borderRadius: "10px",
      background: "#333",
      color: "#fff",
    },
  });
