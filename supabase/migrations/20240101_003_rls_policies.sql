-- Profiles RLS policies
CREATE POLICY "Admins can view all profiles" ON profiles
  FOR SELECT USING (role = 'admin');

CREATE POLICY "Users can view own profile" ON profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Admins can insert profiles" ON profiles
  FOR INSERT WITH CHECK (role = 'admin');

CREATE POLICY "Admins can update profiles" ON profiles
  FOR UPDATE USING (role = 'admin');

-- Product categories RLS policies
CREATE POLICY "Public can view active categories" ON product_categories
  FOR SELECT USING (is_active = true);

CREATE POLICY "Admins can manage categories" ON product_categories
  FOR ALL USING (role = 'admin');

-- Products RLS policies
CREATE POLICY "Public can view published products" ON products
  FOR SELECT USING (is_published = true);

CREATE POLICY "Admins can manage products" ON products
  FOR ALL USING (role = 'admin');

-- Orders RLS policies
CREATE POLICY "Users can view own orders" ON orders
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create orders" ON orders
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Admins can manage orders" ON orders
  FOR ALL USING (role = 'admin');

-- Order items RLS policies
CREATE POLICY "Users can view own order items" ON order_items
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM orders WHERE orders.id = order_items.order_id AND orders.user_id = auth.uid()
    )
  );

CREATE POLICY "Admins can manage order items" ON order_items
  FOR ALL USING (role = 'admin');

-- Project ideas RLS policies
CREATE POLICY "Public can view active project ideas" ON project_ideas
  FOR SELECT USING (status = 'active');

CREATE POLICY "Public can view own project ideas" ON project_ideas
  FOR SELECT USING (created_by = auth.uid());

CREATE POLICY "Admins can manage project ideas" ON project_ideas
  FOR ALL USING (role = 'admin');

-- Engineering services RLS policies
CREATE POLICY "Public can view active services" ON engineering_services
  FOR SELECT USING (is_active = true);

CREATE POLICY "Admins can manage services" ON engineering_services
  FOR ALL USING (role = 'admin');

-- Courses RLS policies
CREATE POLICY "Public can view published courses" ON courses
  FOR SELECT USING (is_published = true);

CREATE POLICY "Admins can manage courses" ON courses
  FOR ALL USING (role = 'admin');

-- Enrollments RLS policies
CREATE POLICY "Users can view own enrollments" ON enrollments
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own enrollments" ON enrollments
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Admins can manage enrollments" ON enrollments
  FOR ALL USING (role = 'admin');

-- Portfolio projects RLS policies
CREATE POLICY "Public can view portfolio projects" ON portfolio_projects
  FOR SELECT USING (true);

CREATE POLICY "Users can view own portfolio projects" ON portfolio_projects
  FOR SELECT USING (created_by = auth.uid());

CREATE POLICY "Admins can manage portfolio projects" ON portfolio_projects
  FOR ALL USING (role = 'admin');

-- Blog categories RLS policies
CREATE POLICY "Public can view active blog categories" ON blog_categories
  FOR SELECT USING (is_active = true);

CREATE POLICY "Admins can manage blog categories" ON blog_categories
  FOR ALL USING (role = 'admin');

-- Blog posts RLS policies
CREATE POLICY "Public can view published blog posts" ON blog_posts
  FOR SELECT USING (is_published = true);

CREATE POLICY "Public can view own blog posts" ON blog_posts
  FOR SELECT USING (author_id = auth.uid());

CREATE POLICY "Admins can manage blog posts" ON blog_posts
  FOR ALL USING (role = 'admin');

-- Inquiries RLS policies
CREATE POLICY "Public can create inquiries" ON inquiries
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Users can view own inquiries" ON inquiries
  FOR SELECT USING (
    email = (SELECT email FROM profiles WHERE id = auth.uid()) OR
    phone IN (
      SELECT phone FROM profiles WHERE id = auth.uid()
    )
);

CREATE POLICY "Admins can manage inquiries" ON inquiries
  FOR ALL USING (role = 'admin');

-- Site settings RLS policies
CREATE POLICY "Admins can manage site settings" ON site_settings
  FOR ALL USING (role = 'admin');