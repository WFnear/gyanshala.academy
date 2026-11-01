export interface EnquiryPayload {
  name: string;
  email: string;
  phone: string;
  course: string;
  message: string;
}

export async function submitEnquiry(payload: EnquiryPayload) {
  const accessKey =
    process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
    "08a8e640-c816-4ca0-b5b2-053a927d4107";

  const formData = new FormData();
  formData.append("access_key", accessKey);
  formData.append("name", payload.name);
  formData.append("email", payload.email);
  formData.append("phone", payload.phone);
  formData.append("course", payload.course || "General Enquiry");
  formData.append("message", payload.message || "No message provided");
  formData.append(
    "subject",
    `🎓 New Enquiry: ${payload.name} - ${payload.course || "General"}`
  );
  formData.append("from_name", "Gyanshala Academy Website");

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: formData,
  });

  const data = await response.json();
  if (!response.ok || !data.success) {
    throw new Error(data.message || "Failed to submit enquiry. Please try again.");
  }

  return data;
}
