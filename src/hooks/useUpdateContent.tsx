import axios from "axios";
import { useMutation } from "react-query";

export default function useAddContent(type: string) {
  const url = "https://sotl-api-v2.vercel.app/api/";
  const addContentType: any = {
    ancestry: "/updateAncestry",
    path: "updatePath",
    item: "updateItem",
    spell: "updateSpell",
  };

  return useMutation((values) => axios.get(addContentType[type]));
}
