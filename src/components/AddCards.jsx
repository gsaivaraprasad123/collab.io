import React from 'react'

function AddCards() {
    return (
        <>
            <div class="p-10 pb-40">
                <h1 class="mb-4 font-extrabold text-4xl text-white">Add Details of Your Work</h1>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

                    <form>
                        <div>
                            <label class="block font-bold text-2xl text-white" for="name">Name:</label>
                            <input class="w-full shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1 w-full" id="name" type="text" name="name" required="required" autofocus="autofocus"/>
                        </div>

                        <div class="mt-4">
                            <label class="block font-bold text-2xl text-white" for="email">Category:</label>
                            <input class="w-full shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1 w-full" id="email" type="email" name="email" required="required"/>
                        </div>

                        <div class="mt-4">
                            <label class="block font-semibold text-2xl text-white" for="password">Description of what your project is:</label>
                            <input class="w-full shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1 w-full" id="desc" type="text" name="desc" required="required" autocomplete="new-password"/>
                        </div>

                        <div class="flex items-center justify-between mt-8">
                            <button type="submit" class="flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10">Register</button>
                        </div>
                    </form>

                    <aside class="">
                        <div class="bg-gray-100 p-8 rounded">
                            <h2 class="font-bold text-2xl">Instructions</h2>
                            <ul class="list-disc mt-4 list-inside">
                                <li>clearly Describe the purpose or goal of the task..</li>
                                <li>Users must not use offensive, vulgar, or otherwise inappropriate language in any of the Fields</li>
                                <li>Clearly state what the FreeLancer needs to do or achieve.</li>
                                <li>Category -&gt; wha tech stack it uses. Eg- (Web Development , App Development etc...).</li>
                            </ul>
                        </div>
                    </aside>

                </div>
            </div>
        </>
    )
}

export default AddCards