import { Form, useActionData, useTransition } from '@remix-run/react';
import { useEffect, useRef, useState } from 'react';

const STATES = {
  SUCCESS: 'SUCCESS',
  SUBMITING: 'SUBMITING',
  NOT_SUBMITED: 'NOT_SUBMITTED',
  ERRORS: 'ERRORS',
};

export default function Newsletter() {
  const actionData = useActionData();
  const transition = useTransition();
  const inputRef = useRef<HTMLInputElement>(null);
  const [visibleClasses, setvisibleClasses] = useState('opacity-0 scale-100');
  const hiddenClasses = 'opacity-0 scale-100';
  const [state, setState] = useState<string>();

  useEffect(() => {
    console.log(actionData);
    inputRef.current?.focus();
    if (actionData !== undefined && !actionData?.errors) {
      setState(STATES.SUCCESS);
    } else if (actionData?.errors) {
      setState(STATES.ERRORS);
      console.log('ERRRORS');
      console.log(inputRef.current?.focus);
    } else if (actionData === undefined) {
      setState(STATES.NOT_SUBMITED);
    }
    if (transition.submission) {
      setState(STATES.SUBMITING);
    }
  }, [actionData, transition]);
  setTimeout(() => {
    setvisibleClasses(
      `transition-all duration-300 ease-in opacity-100 scale-100 block`
    );
  }, 0);

  return (
    <>
      <div
        className={`delay-200 ${
          state === STATES.SUCCESS ? visibleClasses : hiddenClasses
        }`}
      >
        {state === STATES.SUCCESS && (
          <>
            <h2 className="text-2xl text-center">Successfully subscribed!</h2>
            <p className="text-center">
              Please check your email to verify your subscription.
            </p>
          </>
        )}
      </div>
      <div
        className={`${
          state !== STATES.SUCCESS ? visibleClasses : hiddenClasses
        }`}
      >
        <h2 className="text-3xl mb-2 text-center">Sign up for updates</h2>
        <p className="text-center mb-6">
          Follow progress as we build Dev Yearbook in public!
        </p>
        <Form method="post" action="/?index">
          <fieldset
            disabled={state === STATES.SUBMITING}
            className="flex gap-1"
          >
            <input
              className={`border-2 w-full px-4 py-2 text-black rounded-md ${
                actionData?.errors?.email ? 'border-red-500' : 'border-gray-200'
              }`}
              type="email"
              aria-label="email"
              name="email"
              defaultValue={actionData?.values?.email}
              ref={inputRef}
              placeholder="your@email.com"
            />

            <button
              type="submit"
              className="border-2 border-gray-500 px-4 py-2 w-36 rounded-lg"
            >
              {state === STATES.SUBMITING ? 'Subscribing...' : 'Subscribe!'}
            </button>
          </fieldset>
        </Form>
        {state === STATES.ERRORS && actionData?.errors && (
          <p className="text-sm mt-0 h-4 text-red-500">
            {actionData?.errors?.email || actionData?.errors?.error}
          </p>
        )}
      </div>
    </>
  );
}
