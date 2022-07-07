import type { MemberErrorResponse } from '@mailchimp/mailchimp_marketing';
import mailchimp from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_CODE,
});

if (!process.env.MAILCHIMP_LIST_ID) {
  throw new Error("Please include MAILCHIMP_LIST_ID in your environment variables")
}

if (!process.env.MAILCHIMP_SUBSCRIBER_TAG) {
  throw new Error("Please include MAILCHIMP_SUBSCRIBER TAG in your environment variables")
}

const listId = process.env.MAILCHIMP_LIST_ID;
const subscriberTag = process.env.MAILCHIMP_SUBSCRIBER_TAG;
export async function addSubscriber(email: string): Promise<[{ email?: string, generalErrorMsg?: string } | null, string | null]> {
  try {
    await mailchimp.lists.addListMember(listId, {
      email_address: email,
      status: 'subscribed',
      tags: [subscriberTag]
    });
    return [null, email]
  } catch (err: any) {
    if (err?.response?.body?.title === 'Member Exists') {
      return [{ email: "This email address is already subscribed." }, null]
    } else if (err?.response?.body?.detail === 'Please provide a valid email address.') {
      return [{ email: err.response.body.detail }, null]
    }
    return [{ generalErrorMsg: "Failed to save subscriber." }, null]
  }
}

export default addSubscriber;