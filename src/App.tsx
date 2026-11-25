import { FormEvent, ReactNode, useMemo, useState } from 'react'

type Screen = 'sign-in' | 'create-account'

type FieldProps = {
  id: string
  label: string
  type?: string
  value: string
  placeholder: string
  autoComplete: string
  error?: string
  hint?: ReactNode
  onChange: (value: string) => void
  trailing?: ReactNode
}

function BrandMark({ inverse = false }: { inverse?: boolean }) {
  return (
    <div className="flex items-center gap-3" aria-label="SDK Alkaline Water">
      <div className={`flex size-11 items-center justify-center rounded-[14px] shadow-sm ${inverse ? 'bg-white/12 ring-1 ring-white/20' : 'bg-[#075fc9]'}`}>
        <svg aria-hidden="true" viewBox="0 0 32 32" className="size-7" fill="none">
          <path d="M16 3.25C13.1 7.7 8.5 12.63 8.5 18.02c0 4.44 3.36 7.98 7.5 7.98s7.5-3.54 7.5-7.98C23.5 12.63 18.9 7.7 16 3.25Z" fill="white" />
          <path d="M11.7 19.2c.9 2.1 2.43 3.15 4.6 3.15 1.46 0 2.73-.54 3.8-1.63" stroke={inverse ? '#8DE8ED' : '#77E2E8'} strokeLinecap="round" strokeWidth="2" />
        </svg>
      </div>
      <div>
        <p className={`text-[17px] font-bold leading-none tracking-[-0.02em] ${inverse ? 'text-white' : 'text-[#092d55]'}`}>SDK</p>
        <p className={`mt-1 text-[10px] font-semibold uppercase leading-none tracking-[0.16em] ${inverse ? 'text-[#a9d7e9]' : 'text-[#4f708c]'}`}>Alkaline Water</p>
      </div>
    </div>
  )
}

function EyeIcon({ hidden }: { hidden: boolean }) {
  return hidden ? (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" fill="none">
      <path d="m3 3 18 18M10.6 10.7a2 2 0 0 0 2.7 2.7M9.9 4.4A10.6 10.6 0 0 1 12 4c5.5 0 9 5 9 5a16 16 0 0 1-2.2 2.6M6.3 6.3C4.2 7.6 3 9 3 9s3.5 5 9 5c1 0 1.9-.2 2.7-.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ) : (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" fill="none">
      <path d="M3 12s3.5-5 9-5 9 5 9 5-3.5 5-9 5-9-5-9-5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="2.4" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  )
}

function Field({ id, label, type = 'text', value, placeholder, autoComplete, error, hint, onChange, trailing }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-[13px] font-semibold text-[#193a5a]">{label}</label>
      <div className="relative">
        <input id={id} name={id} type={type} value={value} placeholder={placeholder} autoComplete={autoComplete} aria-invalid={Boolean(error)} aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined} onChange={(event) => onChange(event.target.value)} className={`h-12 w-full rounded-xl border bg-white px-3.5 text-[15px] text-[#102f4c] outline-none transition placeholder:text-[#90a5b7] ${trailing ? 'pr-12' : ''} ${error ? 'border-[#d7495b] ring-2 ring-[#d7495b]/10 focus:border-[#d7495b]' : 'border-[#cbd8e2] hover:border-[#9db5c8] focus:border-[#087fbd] focus:ring-4 focus:ring-[#0f9ed4]/10'}`} />
        {trailing}
      </div>
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-[#c13246]">
          <svg aria-hidden="true" viewBox="0 0 20 20" className="size-3.5" fill="none"><circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.7" /><path d="M10 5.8v4.7M10 14v.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /></svg>
          {error}
        </p>
      ) : hint ? <div id={`${id}-hint`} className="mt-2">{hint}</div> : null}
    </div>
  )
}

function PasswordButton({ visible, onClick }: { visible: boolean; onClick: () => void }) {
  return (
    <button type="button" onClick={onClick} className="absolute inset-y-0 right-0 flex w-12 items-center justify-center rounded-r-xl text-[#607d94] transition hover:text-[#075fc9] focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-[#087fbd]" aria-label={visible ? 'Hide password' : 'Show password'}>
      <EyeIcon hidden={visible} />
    </button>
  )
}

function SecurityNote() {
  return (
    <div className="mt-7 flex items-start gap-3 border-t border-[#e3ebf1] pt-5">
      <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-[#e9f7f7] text-[#087e87]">
        <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4" fill="none"><path d="M7 10V7a5 5 0 0 1 10 0v3M6.5 10h11a1.5 1.5 0 0 1 1.5 1.5v7a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 18.5v-7A1.5 1.5 0 0 1 6.5 10Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
      </div>
      <p className="text-xs leading-5 text-[#647e93]">Your connection is encrypted and protected. Access is monitored in accordance with SDK security policies.</p>
    </div>
  )
}

function SignIn({ onCreateAccount }: { onCreateAccount: () => void }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [remember, setRemember] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  function submit(event: FormEvent) {
    event.preventDefault()
    const nextErrors: Record<string, string> = {}
    if (!email.trim()) nextErrors.email = 'Enter your work email address.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = 'Enter a valid email address.'
    if (!password) nextErrors.password = 'Enter your password.'
    setErrors(nextErrors)
  }

  return (
    <>
      <div className="mb-8">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-[#07889a]">Secure access</p>
        <h1 className="text-[30px] font-bold tracking-[-0.035em] text-[#0c2d4c] sm:text-[34px]">Welcome back</h1>
        <p className="mt-2 text-[14px] leading-6 text-[#607a90]">Sign in to access SDK Digital Operations.</p>
      </div>
      <form noValidate onSubmit={submit} className="space-y-5">
        <Field id="email" label="Work email" type="email" value={email} placeholder="name@sdkwater.com" autoComplete="email" error={errors.email} onChange={(value) => { setEmail(value); if (errors.email) setErrors((current) => ({ ...current, email: '' })) }} />
        <Field id="password" label="Password" type={showPassword ? 'text' : 'password'} value={password} placeholder="Enter your password" autoComplete="current-password" error={errors.password} onChange={(value) => { setPassword(value); if (errors.password) setErrors((current) => ({ ...current, password: '' })) }} trailing={<PasswordButton visible={showPassword} onClick={() => setShowPassword((value) => !value)} />} />
        <div className="flex items-center justify-between gap-4">
          <label className="flex cursor-pointer items-center gap-2.5 text-[13px] font-medium text-[#375771]"><input type="checkbox" checked={remember} onChange={(event) => setRemember(event.target.checked)} className="size-4 rounded border-[#abc0cf] accent-[#076bc2]" />Remember me</label>
          <button type="button" className="text-[13px] font-semibold text-[#076bc2] hover:text-[#064f91] hover:underline">Forgot password?</button>
        </div>
        <button type="submit" className="primary-button">Sign in <svg aria-hidden="true" viewBox="0 0 20 20" className="size-4" fill="none"><path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg></button>
      </form>
      <p className="mt-6 text-center text-[13px] text-[#617b90]">Have an invitation?{' '}<button onClick={onCreateAccount} className="font-semibold text-[#076bc2] hover:underline">Activate your account</button></p>
      <SecurityNote />
    </>
  )
}

function CreateAccount({ onSignIn }: { onSignIn: () => void }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const strength = useMemo(() => {
    let score = 0
    if (password.length >= 8) score += 1
    if (/[A-Z]/.test(password) && /[a-z]/.test(password)) score += 1
    if (/\d/.test(password)) score += 1
    if (/[^A-Za-z0-9]/.test(password)) score += 1
    return score
  }, [password])

  function submit(event: FormEvent) {
    event.preventDefault()
    const nextErrors: Record<string, string> = {}
    if (!name.trim()) nextErrors.name = 'Enter your full name.'
    if (!email.trim()) nextErrors.email = 'Enter the email address from your invitation.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = 'Enter a valid work email address.'
    if (!password) nextErrors.password = 'Create a password.'
    else if (strength < 3) nextErrors.password = 'Use at least 8 characters with a mix of letters, numbers, and symbols.'
    if (!confirmPassword) nextErrors.confirmPassword = 'Confirm your password.'
    else if (password !== confirmPassword) nextErrors.confirmPassword = 'Passwords do not match.'
    setErrors(nextErrors)
  }

  const strengthLabels = ['Add a password', 'Weak', 'Fair', 'Strong', 'Excellent']
  return (
    <>
      <div className="mb-6">
        <button onClick={onSignIn} className="mb-5 flex items-center gap-1.5 text-xs font-semibold text-[#58758c] hover:text-[#076bc2]"><svg aria-hidden="true" viewBox="0 0 20 20" className="size-4" fill="none"><path d="m12 5-5 5 5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>Back to sign in</button>
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-[#07889a]">Invitation only</p>
        <h1 className="text-[28px] font-bold tracking-[-0.035em] text-[#0c2d4c] sm:text-[32px]">Create your account</h1>
        <p className="mt-2 text-[14px] leading-6 text-[#607a90]">Set up your secure access to SDK Digital Operations.</p>
      </div>
      <div className="mb-6 flex gap-3 rounded-xl border border-[#b9dce5] bg-[#effafb] p-3.5">
        <svg aria-hidden="true" viewBox="0 0 24 24" className="mt-0.5 size-5 shrink-0 text-[#087e87]" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" /><path d="M12 10v6M12 7.2v.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
        <p className="text-xs leading-5 text-[#376475]">Account creation requires an active invitation from an SDK administrator. Use the work email address that received your invitation.</p>
      </div>
      <form noValidate onSubmit={submit} className="space-y-4">
        <Field id="full-name" label="Full name" value={name} placeholder="Your full name" autoComplete="name" error={errors.name} onChange={(value) => { setName(value); if (errors.name) setErrors((current) => ({ ...current, name: '' })) }} />
        <Field id="create-email" label="Work email" type="email" value={email} placeholder="name@sdkwater.com" autoComplete="email" error={errors.email} onChange={(value) => { setEmail(value); if (errors.email) setErrors((current) => ({ ...current, email: '' })) }} />
        <Field id="new-password" label="Password" type={showPassword ? 'text' : 'password'} value={password} placeholder="Create a secure password" autoComplete="new-password" error={errors.password} onChange={(value) => { setPassword(value); if (errors.password) setErrors((current) => ({ ...current, password: '' })) }} trailing={<PasswordButton visible={showPassword} onClick={() => setShowPassword((value) => !value)} />} hint={<div><div className="flex gap-1.5" aria-hidden="true">{[1, 2, 3, 4].map((level) => <span key={level} className={`h-1 flex-1 rounded-full ${strength >= level ? (strength < 3 ? 'bg-[#e5a12c]' : 'bg-[#18a48e]') : 'bg-[#dfe8ee]'}`} />)}</div><div className="mt-1.5 flex items-center justify-between text-[11px]"><span className="text-[#6b8295]">8+ characters, letters, number & symbol</span><span className={`font-semibold ${strength >= 3 ? 'text-[#138474]' : 'text-[#8a6a35]'}`}>{strengthLabels[strength]}</span></div></div>} />
        <Field id="confirm-password" label="Confirm password" type={showConfirm ? 'text' : 'password'} value={confirmPassword} placeholder="Re-enter your password" autoComplete="new-password" error={errors.confirmPassword} onChange={(value) => { setConfirmPassword(value); if (errors.confirmPassword) setErrors((current) => ({ ...current, confirmPassword: '' })) }} trailing={<PasswordButton visible={showConfirm} onClick={() => setShowConfirm((value) => !value)} />} />
        <button type="submit" className="primary-button mt-2">Create account <svg aria-hidden="true" viewBox="0 0 20 20" className="size-4" fill="none"><path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg></button>
      </form>
      <p className="mt-6 text-center text-[13px] text-[#617b90]">Already have an account?{' '}<button onClick={onSignIn} className="font-semibold text-[#076bc2] hover:underline">Sign in</button></p>
    </>
  )
}

function App() {
  const [screen, setScreen] = useState<Screen>('sign-in')
  return (
    <main className="min-h-screen bg-[#f4f8fb] lg:grid lg:grid-cols-[minmax(380px,0.88fr)_minmax(540px,1.12fr)]">
      <section className="relative hidden min-h-screen overflow-hidden bg-[#082e54] px-12 py-10 lg:flex lg:flex-col xl:px-16 xl:py-12">
        <div className="water-glow water-glow-one" /><div className="water-glow water-glow-two" />
        <div className="relative z-10"><BrandMark inverse /></div>
        <div className="relative z-10 my-auto max-w-[510px] py-16">
          <div className="mb-8 flex size-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10 backdrop-blur-sm"><svg aria-hidden="true" viewBox="0 0 32 32" className="size-7" fill="none"><path d="M6 24V12l10-5 10 5v12M10 24v-7h4v7M18 24v-9h4v9M4 24h24" stroke="#86E4E7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#7cdae2]">Digital Operations Platform</p>
          <h2 className="max-w-[500px] text-[42px] font-semibold leading-[1.12] tracking-[-0.04em] text-white xl:text-[48px]">Clarity and control for every drop.</h2>
          <p className="mt-6 max-w-[470px] text-[15px] leading-7 text-[#bad3e2]">A secure, connected workspace for SDK Alkaline Water teams to manage daily operations with confidence.</p>
        </div>
        <div className="relative z-10 flex items-center gap-3 text-xs text-[#8fb2c9]"><span>© 2025 SDK Alkaline Water</span><span className="size-1 rounded-full bg-[#3c7194]" /><span>Internal use only</span></div>
      </section>
      <section className="flex min-h-screen flex-col bg-white lg:bg-[#f7fafc]">
        <header className="flex items-center justify-between border-b border-[#e2eaf0] bg-white px-5 py-4 lg:hidden"><BrandMark /><span className="rounded-full bg-[#edf7f8] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#16818b]">Internal access</span></header>
        <div className="flex flex-1 items-center justify-center p-5 sm:p-8 lg:p-12">
          <div className={`w-full rounded-2xl bg-white px-1 py-7 sm:border sm:border-[#e0e9ef] sm:px-10 sm:py-10 sm:shadow-[0_20px_60px_rgba(15,55,85,0.08)] ${screen === 'create-account' ? 'max-w-[520px]' : 'max-w-[480px]'}`}>
            {screen === 'sign-in' ? <SignIn onCreateAccount={() => setScreen('create-account')} /> : <CreateAccount onSignIn={() => setScreen('sign-in')} />}
          </div>
        </div>
        <footer className="px-5 pb-5 text-center text-[11px] text-[#8499a9] lg:pb-7">Authorized personnel only · Privacy & security</footer>
      </section>
    </main>
  )
}

export default App
