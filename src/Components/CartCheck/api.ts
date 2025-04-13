import axios from "axios";

const API_BASE_URL = "https://ramoncellapp.pythonanywhere.com/"; // Defina a URL base da sua API

export const createPaymentPreference = async (
  amount: number,
  order_id: string | number,
  user_id: number
): Promise<any> => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/auth/create-payment-preference`,
      {
        amount,
        order_id,
        user_id,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data; // Axios já faz o parsing do JSON
  } catch (error: any) {
    console.error("Erro ao criar preferência de pagamento:", error);
    throw error; // Rejeite o erro para que o componente possa lidar com ele
  }
};
