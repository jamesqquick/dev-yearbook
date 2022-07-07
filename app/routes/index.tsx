import type { ActionFunction} from "@remix-run/node";
import { json } from "@remix-run/node";
import Newsletter from "~/components/newsletter";
import addSubscriber from "~/utils/mailchimp";

export const action: ActionFunction = async ({
  request,
}) => {
  
  const formData = await request.formData();
  const email =  formData.get('email') || '';
  const [errors] = await addSubscriber(email?.toString());

  const values = Object.fromEntries(formData);
  
  if(errors) {
    const body = {errors,values};
    const status = errors?.generalErrorMsg ? 500 : 400;
    return json(body, {status})
  }
  return json({errors, values});
};

export default function Index() {

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl text-center mb-2 uppercase font-bold">Welcome to Dev Yearbook</h1>
      <p className="mb-8 text-xl text-center italic">The easiest way to track relationships built at Tech Conferences</p>     
      <Newsletter/>
    </div>
  );
}
