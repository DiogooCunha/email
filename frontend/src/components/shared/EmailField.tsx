import { useState } from "react";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "../ui/field";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { toast } from "sonner";
import { formatEmailDate } from "@/utils/format/formatDate";

const EmailField = () => {
  const [recipientEmail, setRecipientEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [includeTitle, setIncludeTitle] = useState(true);

  async function sendEmail() {
    try {
      const res = await fetch("http://localhost:3333/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: recipientEmail,
          subject: subject,
          title: title,
          content: content,
        }),
      });

      const resultado = await res.json();
      console.log(resultado);
      const now = new Date();

      if (!res.ok) {
        toast.warning("Something went wrong", {
          description: formatEmailDate(now),
        });
      }

      toast.success("Email has been sent", {
        description: formatEmailDate(now),
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className='w-full max-w-md'>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendEmail();
        }}
      >
        <FieldGroup>
          <FieldSet>
            <FieldLegend>Emailing Method</FieldLegend>
            <FieldDescription>
              All emails are secure and encrypted
            </FieldDescription>
          </FieldSet>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor='to-email'>Recipients Email*</FieldLabel>
              <Input
                id='to-email'
                placeholder='recipient@gmail.com'
                required
                onChange={(e) => setRecipientEmail(e.target.value)}
              />
            </Field>
            <Field>
              <FieldLabel htmlFor='subject'>Subject*</FieldLabel>
              <Input
                id='subject'
                placeholder='Some serious subject'
                required
                onChange={(e) => setSubject(e.target.value)}
              />
            </Field>
            <FieldSet>
              <FieldLegend>Title</FieldLegend>
              <Field orientation='horizontal'>
                <Checkbox
                  id='title-checkbox'
                  checked={includeTitle}
                  onCheckedChange={(e) => setIncludeTitle(e === true)}
                />
                <FieldLabel htmlFor='title-checkbox' className='font-normal'>
                  Include title
                </FieldLabel>
              </Field>
              {includeTitle ? (
                <Field>
                  <FieldLabel htmlFor='title'>
                    The title associated with your email
                  </FieldLabel>
                  <Input
                    id='title'
                    placeholder='This is the title'
                    required
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </Field>
              ) : (
                ""
              )}
              <Field>
                <FieldLabel htmlFor='content'>
                  The content in your email
                </FieldLabel>
                <Textarea
                  id='content'
                  placeholder='Add any additional content'
                  className='resize-none'
                  onChange={(e) => setContent(e.target.value)}
                />
              </Field>
            </FieldSet>
          </FieldGroup>
          <Field orientation='horizontal'>
            <Button type='submit'>Submit</Button>
            <Button variant='outline' type='button'>
              Cancel
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  );
};

export default EmailField;
