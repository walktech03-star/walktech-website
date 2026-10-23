-- Products indexes
CREATE INDEX IF NOT EXISTS idx_products_category_id ON products(category_id);
CREATE INDEX IF NOT EXISTS idx_products_is_published ON products(is_published);
CREATE INDEX IF NOT EXISTS idx_products_sku ON products(sku);

-- Orders indexes
CREATE INDEX IF NOT EXISTS idx_orders_user_id ON orders(user_id);
CREATE INDEX IF NOT EXISTS idx_orders_status ON orders(status);

-- Order items indexes
CREATE INDEX IF NOT EXISTS idx_order_items_order_id ON order_items(order_id);

-- Project ideas indexes
CREATE INDEX IF NOT EXISTS idx_project_ideas_discipline ON project_ideas(discipline);
CREATE INDEX IF NOT EXISTS idx_project_ideas_status ON project_ideas(status);

-- Courses indexes
CREATE INDEX IF NOT EXISTS idx_courses_is_published ON courses(is_published);

-- Enrollments indexes
CREATE INDEX IF NOT EXISTS idx_enrollments_course_id ON enrollments(course_id);

-- Portfolio projects indexes
CREATE INDEX IF NOT EXISTS idx_portfolio_projects_development_status ON portfolio_projects(development_status);

-- Blog posts indexes
CREATE INDEX IF NOT EXISTS idx_blog_posts_is_published ON blog_posts(is_published);
CREATE INDEX IF NOT EXISTS idx_blog_posts_category_id ON blog_posts(category_id);

-- Inquiries indexes
CREATE INDEX IF NOT EXISTS idx_inquiries_status ON inquiries(status);