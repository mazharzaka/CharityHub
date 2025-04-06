// import React from 'react'

import { useCustomForm } from "@/utils/useFormHook";
import Headline from "../cards/Headline"
import Droplist from "../forms/Droplist"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { IUser } from "@/types/User";
import { registerSchema } from "@/utils/Vaildation";
import Store from "@/lib/store/Auth";
import { Controller } from "react-hook-form";
// import { useState } from "react";

function FormSignup() {
    const { control, handleSubmit, formState: { errors } } = useCustomForm<IUser>(registerSchema);
    // const [file, setFile] = useState<File | null>(null);
    const { createUser } = Store()
    const onSubmit = (data: IUser) => {
        const formData = new FormData();
        formData.append("Fname", data.Fname);
        formData.append("Lname", data.Lname);
        formData.append("email", data.email);
        formData.append("phone", data.phone.toString());
        formData.append("age", data.age.toString());
        formData.append("role", data.role);
        formData.append("address", JSON.stringify(data.address));
        console.log("✅ profileImg type:", typeof data.profileImg);
        console.log("✅ is File:", data.profileImg instanceof (window as any).File);

        console.log("✅ file object:", data.profileImg);
        formData.append("profileImg", data.profileImg as File);
        formData.append("password", data.password);
        console.log(formData.get("profileImg"));

        createUser(formData)
    };
    return (
        <div className="flex justify-center items-center ">
            <div className="w-96 !mt-20 shadow-2xl">
                <form className="!p-10 rounded-2xl" onSubmit={handleSubmit(onSubmit)}>
                    <div className="text-center "><Headline text="Register" size="text-4xl" /> </div>
                    <div className="!mb-4">
                        <label className="!mb-2">First Name</label>
                        <Input {...control.register("Fname")} placeholder="First Name" />
                        {errors.Fname && <p className="text-red-600 bg-red-100 !mt-1 !p-2 rounded-md text-sm">{errors.Fname.message}</p>}

                    </div>
                    <div className="!mb-4">
                        <label className="!mb-2">Last Name</label>
                        <Input  {...control.register("Lname")} placeholder="Last Name" />
                        {errors.Lname && <p className="text-red-600 bg-red-100 !mt-1 !p-2 rounded-md text-sm">{errors.Lname.message}</p>}

                    </div>
                    <div className="!mb-4">
                        <label className="!mb-2">Email</label>
                        <Input  {...control.register("email")} placeholder="Email" />
                        {errors.email && <p className="text-red-600 bg-red-100 !mt-1 !p-2 rounded-md text-sm">{errors.email.message}</p>}

                    </div>
                    <div className="!mb-4">
                        <label className="!mb-2">Phone</label>
                        <Input {...control.register("phone")} placeholder="Phone" />
                        {errors.phone && <p className="text-red-600 bg-red-100 !mt-1 !p-2 rounded-md text-sm">{errors.phone.message}</p>}

                    </div>
                    <div className="!mb-4">
                        <label className="!mb-2">Role</label>
                        <Controller
                            name="role"
                            control={control}
                            render={({ field }) => (
                                <Droplist
                                    options={[ "donor","admin" ]}
                                    value={field.value ?? "donor"}
                                    onChange={field.onChange}
                                />
                            )}
                        />
                        {/* {errors.role && <p className="text-red-600 bg-red-100 !mt-1 !p-2 rounded-md text-sm">{errors.role.message}</p>}`` */}
                    </div>
                    <div className="!mb-4">
                        <label className="!mb-2">Address</label>
                        <Input  {...control.register("address.street")} className="!mb-2" placeholder="Street " />
                        {errors.address?.street && <p className="text-red-600 bg-red-100 !mt-1 !p-2 rounded-md text-sm">{errors.address.street.message}</p>}
                        <Input  {...control.register("address.city")} className="!mb-2" placeholder="City" />
                        {errors.address?.city && <p className="text-red-600 bg-red-100 !mt-1 !p-2 rounded-md text-sm">{errors.address.city.message}</p>}
                        <Input  {...control.register("address.country")} className="!mb-2" placeholder="Country" />
                        {errors.address?.country && <p className="text-red-600 bg-red-100 !mt-1 !p-2 rounded-md text-sm">{errors.address.country.message}</p>}
                    </div>
                    <div className="!mb-4">
                        <label className="!mb-2">Age</label>
                        <Input type="number"  {...control.register("age")} placeholder="Age" />
                        {errors.age && <p className="text-red-600 bg-red-100 !mt-1 !p-2 rounded-md text-sm">{errors.age.message}</p>}
                    </div>
                    <div className="!mb-4">
                        <label className=" !mb-2">Upload Image</label>

                        <Controller
                            name="profileImg"
                            control={control}
                            defaultValue={undefined}
                            render={({ field }) => (
                                <Input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => field.onChange(e.target.files?.[0])}
                                />
                            )}
                        />

                        {errors.profileImg && (
                            <p className="text-red-600 bg-red-100 mt-2 p-2 rounded-md text-sm">
                                {errors.profileImg.message}
                            </p>
                        )}
                    </div>
                    <div className="!mb-4">
                        <label className="!mb-2">Password</label>
                        <Input type="password" {...control.register("password")} placeholder="Password" />
                        {errors.password && <p className="text-red-600 bg-red-100 !mt-1 !p-2 rounded-md text-sm">{errors.password.message}</p>}
                    </div>
                    <div className="!mb-4">
                        <label className="!mb-2">Confirm Password</label>
                        <Input type="password" {...control.register("confirmPassword")} placeholder="Confirm Password" />
                        {errors.confirmPassword && <p className="text-red-600 bg-red-100 !mt-1 !p-2 rounded-md text-sm">{errors.confirmPassword.message}</p>}
                    </div>
                    <div className="text-center !mb-4">
                        <Button className="text-xl cursor-pointer !px-5 !py-6 bg-[#09cc7f] hover:bg-[#24ac75]" type="submit">Signup</Button>
                    </div>


                </form>
            </div>
        </div>
    )
}

export default FormSignup