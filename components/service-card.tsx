import type { ReactNode } from "react"

interface ServiceCardProps {
  icon?: ReactNode
  title: string
  description: string
  features?: string[]
}

export default function ServiceCard({ icon, title, description, features }: ServiceCardProps) {
  return (
    <div className="bg-white border-2 border-black p-6 rounded-none">
      {icon && <div className="mb-4 text-2xl">{icon}</div>}
      <h3 className="mb-2 text-black">{title}</h3>
      <p className="text-gray-700 mb-4 text-sm">{description}</p>
      {features && (
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
              <span className="font-bold">—</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
