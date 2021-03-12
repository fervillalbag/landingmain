
import Submit from '../atoms/Submit'
import Input from '../atoms/Input'

export default function Form() {

  const handleSubmit = () => {
    // console.log('e')
  }

  return (
    <div>
      <Input placeholder="Updates in your box.." />
      <Submit handleSubmit={handleSubmit}>Go</Submit>

      <style jsx>{`
        div {
          display: flex;
          column-gap: 1.5rem;
        }  
      `}</style>
    </div>
  )
}
