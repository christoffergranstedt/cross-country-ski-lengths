import React from 'react'
import axios from 'axios'
import { HTTPMethod } from '../Constants/HTTPMethod'
import { DataResponse } from '../Interfaces/DataResponse'


interface UseRequestProps {
	url: string
	method: HTTPMethod
	body?: any
}

export const useRequest = () => {

  const sendRequest = React.useCallback(async <T, >({ url, method, body }: UseRequestProps): Promise<DataResponse<T>> => {
    try {
			if (!process.env.REACT_APP_BACKEND_URL) throw new Error('No REACT_APP_BACKEND_URL environment variable is provided')

      const { data } = await axios({
        url: `${process.env.REACT_APP_BACKEND_URL}${url}`,  
        method: method,
        headers: {
          'Content-Type': 'application/json'
        },
        data: body
			})

      if (!data) throw new Error()
      return data as DataResponse<T>
    } catch (error: any) {
      if (error.response) {
				throw new Error(error.response.data.errors[0].message)
      } else {
        throw new Error('No data could be found')
      }
    }
  }, [])
 
  return { sendRequest }
}