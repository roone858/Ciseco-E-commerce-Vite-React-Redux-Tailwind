import axios from "../utils/axios";

const reviewsService = {
  getProductReviews: async (productId: string) => {
    const res = await axios.get("http://localhost:3000/reviews/" + productId);
    return res.data;
  },
};
export default reviewsService;
