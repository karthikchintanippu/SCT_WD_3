const VARIANTS = {
  primary: 'bg-chalk text-slate-deep hover:bg-white',
  outline: 'bg-transparent text-chalk border border-chalk-line hover:border-chalk-dust',
  ghost: 'bg-transparent text-chalk-dust hover:text-chalk'
}

export default function Button({ children, variant = 'primary', className = '', ...props }) {
  return (
    <button
      className={`font-body font-semibold text-sm px-6 py-3 rounded-md transition-colors duration-200 ${VARIANTS[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
