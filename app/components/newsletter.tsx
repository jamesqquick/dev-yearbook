import { Form, useActionData, useTransition } from "@remix-run/react";
import { useEffect, useState } from "react";

const NEWSLETTER_STATES = {
  SUCCESS:'SUCCESS',
  SUBMITING: 'SUBMITING',
  NOT_SUBMITED:'NOT_SUBMITTED',
  ERRORS: 'ERRORS'
}

export default function Newsletter() {
  const actionData = useActionData();
  const transition = useTransition();
  const [visibleClasses, setvisibleClasses] = useState('opacity-0 scale-100')
  const hiddenClasses = 'opacity-0 scale-100';
  const [state, setState] = useState<string>();

  useEffect(() => {
    console.log(transition);
    if(actionData !== undefined && !actionData?.errors ){
      setState(NEWSLETTER_STATES.SUCCESS)
    }else if(actionData?.errors){
      setState(NEWSLETTER_STATES.ERRORS)
    }else if(actionData === undefined ){
      setState(NEWSLETTER_STATES.NOT_SUBMITED)
    }
    if(transition.submission){
      setState(NEWSLETTER_STATES.SUBMITING);
    }
  }, [actionData, transition])
  setTimeout(() => {
    setvisibleClasses(`transition-all duration-300 ease-in opacity-100 scale-100 block`);
  }, 0)

  
  return (
    <>
      <div className={`delay-200 ${state === NEWSLETTER_STATES.SUCCESS? visibleClasses: hiddenClasses}`}>
        {state === NEWSLETTER_STATES.SUCCESS &&
          <>
            <h2 className="text-2xl text-center">Successfully subscribed!</h2>
            <p className="text-center">Please check your email to verify your subscription.</p>
          </>
        }
      </div>
      <div className={`${ state !== NEWSLETTER_STATES.SUCCESS ? visibleClasses: hiddenClasses}`}>
          <h2 className="text-3xl mb-2 text-center">Sign up for updates</h2>
          <p className="text-center mb-6">Follow progress as we build Dev Yearbook in public!</p> 
          <Form method="post" action="/?index">
            <label>Email <input name="email" className="block border-2 w-full px-4 py-1 rounded-sm border-gray-500 mb-4" type="text" defaultValue={actionData?.values?.email}/></label>
            <button type="submit" className="border-2 border-gray-500 px-4 py-1 rounded-sm">{state=== NEWSLETTER_STATES.SUBMITING ? 'Loading...' : 'Sign Up!'}</button>
            <p className="text-center">{actionData?.errors?.email}</p>
          </Form>    
          {actionData?.errors?.generalErrorMsg && <p>{actionData?.errors?.generalErrorMsg}</p>}
      </div>
    </>
  );
}
