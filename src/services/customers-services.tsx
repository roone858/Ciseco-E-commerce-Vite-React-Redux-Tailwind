import { Customer } from "../types";

class customerService {
  static async deleteCustomer(id: number) {
    await fetch(`http://localhost:3000/customers/${id}`, {
      method: "DELETE",
    });
    // .then(result=>result.json()).then(data => data)
    // console.log(response)
    // return response;
  }

  static async getCustomers() {
    try {
      const response = await fetch("http://localhost:3000/customers");
      const json = await response.json();
      return json;
    } catch (error) {
      console.log("error", error);
    }
  }
  static async getCustomer(id: any) {
    try {
      const response = await fetch(`http://localhost:3000/customers/${id}`);
      const json = await response.json();
      return json;
    } catch (error) {
      console.log("error", error);
    }
  }
  static async getCustomerCart(id: any) {
    try {
      const response = await fetch(`http://localhost:3000/customers/${id}`);
      const json = await response.json();
      return json.cart;
    } catch (error) {
      console.log("error", error);
    }
  }
  static async login({ email, password }: { password: string; email: string }) {
    try {
      const response = await fetch(`http://localhost:3000/customers`);
      const customers = await response.json();
      const customer = customers.find(
        (customer: Customer) => customer.email == email
      );
      if (customer) {
        if (customer.password == password) {
          return customer;
        } else return { password: "wrong password" };
      }
      return { message: "user not found" };
    } catch (error) {
      console.log("error", error);
    }
  }
  static async insertCustomer(data: any) {
    try {
      const response = await fetch("http://localhost:3000/customers/", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data),
      });
      const json = await response.json();
      return json;
    } catch (error) {
      console.log("error", error);
    }
  }
  static async updateCustomer(id: any, data: any) {
    try {
      const response = await fetch(`http://localhost:3000/customers/${id}`, {
        method: "PUT",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data),
      });
      const json = await response.json();
      return json;
    } catch (error) {
      console.log("error", error);
    }
  }
}
export default customerService;
