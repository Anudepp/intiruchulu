import axios from "axios";

export function getApiErrorMessage(error: unknown): string {
  if (!axios.isAxiosError(error)) {
    return "Something went wrong. Please try again.";
  }

  // Request timeout
  if (error.code === "ECONNABORTED") {
    return "The server took too long to respond. Please try again.";
  }

  // No response received
  if (!error.response) {
    return "Unable to connect to the server. Please check your internet connection.";
  }

  switch (error.response.status) {
    case 400:
      return "Invalid request.";

    case 401:
      return "Please sign in again.";

    case 403:
      return "You don't have permission to perform this action.";

    case 404:
      return "Requested resource was not found.";

    case 500:
      return "Server error. Please try again later.";

    default:
      return "Something went wrong. Please try again.";
  }
}