"use client";

import { motion } from "framer-motion";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

const settingsSchema = z.object({
  siteName: z.string().min(3, "Site name must be at least 3 characters."),
  email: z.string().email("Please enter a valid email address."),
  maintenanceMode: z.boolean(),
  defaultAIModel: z.string().min(1, "Please select a default AI model."),
});

type SettingsFormValues = z.infer<typeof settingsSchema>;

const defaultValues: SettingsFormValues = {
  siteName: "AImate",
  email: "admin@aimate.com",
  maintenanceMode: false,
  defaultAIModel: "auto",
};

const SettingsForm = () => {
  const form = useForm<SettingsFormValues>({
    resolver: zodResolver(settingsSchema),
    defaultValues,
  });

  function onSubmit(values: SettingsFormValues) {
    toast.success("You submitted the following values:", {
      description: (
        <pre className="mt-2 w-full rounded-md bg-muted p-4">
          <code className="text-sm text-muted-foreground">
            {JSON.stringify(values, null, 2)}
          </code>
        </pre>
      ),
    });
    console.log("Updated Settings:", values);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
    <div className="space-y-6 mt-4">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <h1 className="text-3xl font-bold tracking-tight mb-2">Settings</h1>
        <p className="text-muted-foreground">
          Manage platform configuration and preferences.
        </p>
      </motion.div>
      <Tabs defaultValue="general" className="w-full">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
        </TabsList>

        {/* General Settings Tab */}
        <TabsContent value="general" className="mb-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
          <Card className="shadow-sm hover:shadow-md transition-shadow duration-300">
            {/* Header */}
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
            </CardHeader>

            {/* Settings Form */}
            <CardContent>
              <form
                id="general-settings-form"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <FieldGroup>
                  {/* Site Name */}
                  <Controller
                    name="siteName"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel>Site Name</FieldLabel>
                        <Input
                          {...field}
                          id="siteName-input"
                          aria-invalid={fieldState.invalid}
                          placeholder="Platform name"
                          autoComplete="sitename"
                        />
                        <FieldDescription>
                          Displayed across the dashboard and emails.
                        </FieldDescription>
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />

                  {/* Support Email */}
                  <Controller
                    name="email"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel>Support Email</FieldLabel>
                        <Input
                          {...field}
                          id="email-input"
                          aria-invalid={fieldState.invalid}
                          placeholder="support@example.com"
                          autoComplete="email"
                        />
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />

                  {/* Default AI Model */}
                  <Controller
                    name="defaultAIModel"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field
                        orientation="responsive"
                        data-invalid={fieldState.invalid}
                      >
                        <FieldContent>
                          <FieldLabel htmlFor="defaultAIModel">
                            Default AI Model
                          </FieldLabel>
                          <FieldDescription>
                            Select the default AI model for new projects.
                          </FieldDescription>
                        </FieldContent>

                        <Select
                          name={field.name}
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <SelectTrigger
                            id="defaultAIModel"
                            aria-invalid={fieldState.invalid}
                            className="w-full"
                          >
                            <SelectValue placeholder="Select model" />
                          </SelectTrigger>
                          <SelectContent position="item-aligned">
                            <SelectItem value="auto">Auto</SelectItem>
                            <SelectSeparator />
                            <SelectItem value="gpt-4o">GPT-4o</SelectItem>
                            <SelectItem value="claude-3.5">
                              Claude 3.5
                            </SelectItem>
                            <SelectItem value="gemini-1.5">
                              Gemini 1.5
                            </SelectItem>
                          </SelectContent>
                        </Select>

                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />

                  {/* Maintenance Mode */}
                  <Controller
                    name="maintenanceMode"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field
                        className="border p-3 rounded-md"
                        orientation="horizontal"
                        data-invalid={fieldState.invalid}
                      >
                        <FieldContent>
                          <FieldLabel htmlFor="maintenanceMode">
                            Maintenance Mode
                          </FieldLabel>
                          <FieldDescription>
                            Temporarily disable user access.
                          </FieldDescription>
                        </FieldContent>
                        <Switch
                          className="my-auto"
                          id="maintenanceMode"
                          name={field.name}
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          aria-invalid={fieldState.invalid}
                        />
                      </Field>
                    )}
                  />  
                </FieldGroup>
              </form>
            </CardContent>
            <CardFooter>
              <Field orientation="horizontal">
                <Button type="button" variant="outline" className="active:scale-[0.97] transition" onClick={() => form.reset()}>
                  Reset
                </Button>
                <Button type="submit" className="active:scale-[0.97] transition shadow-sm hover:shadow-md" form="general-settings-form">
                  Save Changes
                </Button>
              </Field>
            </CardFooter>
          </Card>
          </motion.div>
        </TabsContent>

        {/* Security Tab */}
        <TabsContent value="security">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
          <Card className="shadow-sm hover:shadow-md transition-shadow duration-300">
            <CardContent className="p-6 text-muted-foreground">
              Security settings coming soon.
            </CardContent>
          </Card>
          </motion.div>
        </TabsContent>

        {/* Billing Tab */}
        <TabsContent value="billing">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
          <Card className="shadow-sm hover:shadow-md transition-shadow duration-300">
            <CardContent className="p-6 text-muted-foreground">
              Billing settings coming soon.
            </CardContent>
          </Card>
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
    </motion.div>
  );
};

export default SettingsForm;
