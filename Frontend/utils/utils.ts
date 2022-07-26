import { Contact } from "react-native-contacts";
import { ChatType } from "../store/api/apiSlice";

export function getChatName(currentUser: string, chat: ChatType, contacts: Contact[]) {
  const second_party = chat.first_party == currentUser ? chat.second_party : chat.first_party
  const cont = contacts.find((con) => {
    for (let i = 0; i < con.phoneNumbers.length; i++) {
      if (con.phoneNumbers[i].number == second_party) return true
    }
  })
  return cont ? cont.displayName : second_party
}
