import React from 'react'
import Button from '../Button/Button'

const MyOrder = () => {
  return (

    <div>
      <h3 className='text-xl font-space font-semibold mb-10'>My orders</h3>
      <div class="relative overflow-x-auto w-full">
        <table class="w-full text-sm text-left text-gray-500 border">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3">
                Order Id
              </th>
              <th scope="col" class="px-6 py-3">
                Order Time
              </th>
              <th scope="col" class="px-6 py-3">
                Status
              </th>
              <th scope="col" class="px-6 py-3">
                View
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b ">

              <td class="px-6 py-4">
                #fkfkA
              </td>
              <td class="px-6 py-4">
               <p>pending</p>
              </td>
              <td class="px-6 py-4">
                <p className='text-theme_color'>pending</p>
              </td>
              <td class="px-6 py-4">
                  <Button name="Invoice" className="!bg-f1 !text-primary !py-1 !px-3"/>
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>



  )
}

export default MyOrder